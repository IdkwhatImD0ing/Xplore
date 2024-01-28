from typing import List
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel

import math
import random
from dotenv import load_dotenv

from ga import create_graph_with_manhattan_distances, run_genetic_algorithm
from attractions import attractions_wrapper

import googlemaps
from datetime import datetime
import os

gmaps = googlemaps.Client(key=os.getenv("GOOGLE_CLOUD_API_KEY"))

# Add cors
from fastapi.middleware.cors import CORSMiddleware
origins = ["*"]


load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["POST"],
    allow_headers=["*"],
)

class Place(BaseModel):
    name: str
    lat: float
    lon: float
    
class GeneticAlgorithmInput(BaseModel):
    places: List[Place]
    initial_pop_size: int
    start_attractions: List[str]  # List of starting attractions for each day
    end_attractions: List[str]    # List of ending attractions for each day
    final_path_size: int
    generations: int
    initial_mutation_rate: float
    minimum_mutation_rate: float
    
class AttractionsInput(BaseModel):
    cities: List[str]
    preferences: str  
    
class GeocodeInput(BaseModel):
    cities: List[str]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/generate-route")
def generate_route(data: GeneticAlgorithmInput):
    all_variations = []  # Store all variations of routes

    for _ in range(5):  # Define how many variations you want
        # Convert places to a graph
        graph = create_graph_with_manhattan_distances(data.places)
        all_routes = []

        # Ensure the lengths of start_attractions and end_attractions are equal
        if len(data.start_attractions) != len(data.end_attractions):
            raise HTTPException(status_code=400, detail="The number of start attractions and end attractions must be equal.")
        
        all_start_end_points = data.start_attractions + data.end_attractions
        # Iterate over the start and end positions
        for start, end in zip(data.start_attractions, data.end_attractions):
            # Run the genetic algorithm for the current start and end attractions
            route, route_metric = run_genetic_algorithm(
                graph, 
                data.initial_pop_size, 
                start, 
                end, 
                data.final_path_size, 
                data.generations, 
                data.initial_mutation_rate, 
                data.minimum_mutation_rate,
                all_start_end_points
            )
            all_routes.append(route)

            # Remove the used attractions from the graph, except the start and end attractions
            for place_name in route:
                if place_name != start and place_name != end:
                    if place_name in graph:
                        del graph[place_name]
                    for remaining in graph.values():
                        remaining.pop(place_name, None)  # Remove the attraction if it's present

        all_variations.append(all_routes)  # Add the routes for this variation to the list of all variations

    return all_variations

@app.post("/attractions")
async def get_attractions(data: AttractionsInput):
    attractions = await attractions_wrapper(data.cities, data.preferences)
    return attractions

@app.post("/geocode-multiple")
async def geocode_multiple_cities(data: GeocodeInput):
    locations = []
    for city in data.cities:
        try:
            geocode_result = gmaps.geocode(city)
            if not geocode_result:
                locations.append({"name": city, "lat": None, "lng": None, "error": "Address not found"})
                continue

            location = geocode_result[0]['geometry']['location']
            locations.append({"name": city, "lat": location['lat'], "lng": location['lng']})
        except Exception as e:
            locations.append({"name": city, "lat": None, "lng": None, "error": str(e)})
    
    return locations