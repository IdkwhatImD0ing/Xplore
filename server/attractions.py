import re
import asyncio
import requests
import json
import os
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport
from dotenv import load_dotenv
from openai import AsyncOpenAI
load_dotenv()

def generate_yelp_graphql_queries(search_locations, max_locations_per_query=10):
    """
    Generates a list of GraphQL queries for the Yelp API based on a list of search locations,
    with a maximum of `max_locations_per_query` locations per query.

    Parameters:
    - search_locations (list): A list of dictionaries, each containing 'name', 'address', 'city', 'state', and 'country' keys.
    - max_locations_per_query (int): The maximum number of locations per query.

    Returns:
    - list: A list of GraphQL query strings for the provided search locations.
    """
    # Split search_locations into chunks of max_locations_per_query
    chunks = [search_locations[i:i + max_locations_per_query] for i in range(0, len(search_locations), max_locations_per_query)]
    
    queries = []
    for chunk_index, chunk in enumerate(chunks):
        query_parts = [f"query MyQuery{chunk_index}{{"]
        for index, location in enumerate(chunk):
            # Sanitize the name by removing spaces, special characters, and non-ASCII characters
            sanitized_name = re.sub(r'[^\x20-\x7E\s]', '', location['name'])
            sanitized_sanitized_name = re.sub(r'[^a-zA-Z]', '', location['name'])
            # Ensure the address and other strings are properly escaped
            # Construct the business_match query part
            query_parts.append(
                f"{sanitized_sanitized_name}: business_match("
                f"address1: \"{location['address']}\", "
                f"city: \"{location['city']}\", "
                f"country: \"{location['country']}\", "
                f"name: \"{sanitized_name}\", "
                f"state: \"{location['state']}\""
                ") {"
                "  business {"
                "    name"
                "    photos"
                "    rating"
                "    coordinates {"
                "      latitude"
                "      longitude"
                "    }"
                "  }"
                "}"
            )
        query_parts.append("}")
        query = " ".join(query_parts)
        queries.append(query)
    return queries

def parse_yelp_response(response_text):
    """
    Parses the Yelp GraphQL API response and formats it into a list of dictionaries.

    Parameters:
    - response_text (str): The JSON response text from the Yelp API.

    Returns:
    - list: A list of dictionaries, each containing 'name', 'address', 'photo', 'rating', 'lat', and 'lon'.
    """

    formatted_results = []
    

    for search_key, search_result in response_text.items():
        for business in search_result.get('business', []):
            formatted_results.append({
                'name': business.get('name'),
                'photo': business['photos'][0] if business['photos'] else None,
                'rating': business.get('rating'),
                'lat': business['coordinates'].get('latitude'),
                'lon': business['coordinates'].get('longitude')
            })

    return formatted_results

async def yelp_wrapper(location, term="attractions", radius=20000, sort_by="best_match", limit=20):
    # Get a list of locations from Yelp API
    params = {
        "location": location,
        "term": term,
        "radius": radius,
        "sort_by": sort_by,
        "limit": limit
    }
    yelp_url = f"https://api.yelp.com/v3/businesses/search?{urllib.parse.urlencode(params)}"
    yelp_header = {
        "accept": "application/json",
        "Authorization": f"Bearer {os.getenv('YELP_API_KEY')}"
    }
    response = await asyncio.to_thread(requests.get, yelp_url, headers=yelp_header)
    if response.status_code == 200:
        yelp_data = response.json()
        # Parse and format the response
        formatted_locations = [
            {
                "name": business.get("name"),
                "address": " ".join(business["location"].get("display_address", [])),
                "photo": business.get("image_url"),
                "rating": business.get("rating"),
                "description": ", ".join(category["title"] for category in business.get("categories", [])),
                "lat": business["coordinates"].get("latitude"),
                "lon": business["coordinates"].get("longitude")
            }
            for business in yelp_data.get("businesses", [])
        ]
        return json.dumps(formatted_locations)
    
    else:
        response.raise_for_status()
        
        


async def openai_wrapper(location, preferences = ""):
    # Get a list of 10 locations form OpenAI api
    openai_client = AsyncOpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    # print(location, preferences)
    client_content = f"""
I am traveling to {location}, and I want to visit attractions around this area that fit these criteria: {preferences}.
Generate a list of 10 attraction objects and return in this format:
{{
    "attractions": [
        {{
            "name": "<name>",
            "address": "<street address>",
            "city": "<city>",
            "state": "<state>",
            "country": "<country>",
        }}
    ]
}}
"""
    chat_completion = await openai_client.chat.completions.create(
        model="gpt-4-turbo-preview",
        response_format={ "type": "json_object" },
        messages=[
            {"role": "system", "content": "You are a helpful travel assistant designed to output JSON containing a list of objects that have atrribute name and address."},
            {"role": "user", "content": client_content}
        ],
    )
    return json.loads(chat_completion.choices[0].message.content)["attractions"]




# Ensure you have the generate_yelp_graphql_queries and parse_yelp_response functions defined as before

async def execute_graphql_query(query_string, headers):
    transport = AIOHTTPTransport(
        url="https://api.yelp.com/v3/graphql",
        headers=headers,
    )
    # Create a GraphQL client using the defined transport
    client = Client(transport=transport, fetch_schema_from_transport=True)
    # Execute the query asynchronously
    query = gql(query_string)
    result = await client.execute_async(query)
    # Close the client after the query is executed
    await client.close_async()
    return result

async def yelp_batch_wrapper(search_locations):
    """
    Fetches data from Yelp API asynchronously using GraphQL.

    Parameters:
    - search_locations (list): A list of dictionaries with 'name' and 'address' for search locations.

    Returns:
    - list: A list of parsed JSON responses from the Yelp API.
    """
    # Generate all GraphQL queries
    graphql_queries = generate_yelp_graphql_queries(search_locations)
    # print(graphql_queries)
    
    headers = {
        "Authorization": f"Bearer {os.getenv('YELP_API_KEY')}",
        "Content-Type": "application/json",
    }

    # List to store all the parsed results
    all_parsed_results = []

     # Execute each query sequentially with a one-second delay between them
    for query in graphql_queries:
        result = await execute_graphql_query(query, headers)
        parsed_results = parse_yelp_response(result)
        all_parsed_results.extend(parsed_results)
    
    return all_parsed_results

async def attractions_wrapper(locations, preferences=""):
    # Run openai_wrapper concurrently for all locations
    openai_tasks = [openai_wrapper(location, preferences) for location in locations]
    openai_results = await asyncio.gather(*openai_tasks)

    
    # Combine the results from all locations
    combined_openai_results = [attraction for result in openai_results for attraction in result]
    
    # Feed the combined results into yelp_batch_wrapper
    yelp_results = await yelp_batch_wrapper(combined_openai_results)
    
    return yelp_results