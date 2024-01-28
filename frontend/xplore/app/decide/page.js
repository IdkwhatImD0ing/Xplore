'use client'

import React, {useState} from 'react'
import{Box, Button, SimpleGrid, Text, Flex, Select} from '@chakra-ui/react'
import AttractionCard from './AttractionCard'

const citiesData =
    [
      {
        cityName : 'Metroville',
        attractions : [
          {
            attractionName : 'Central Park',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Metro Museum',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Skyline Tower',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
          {
            attractionName : 'Riverside Walk',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Grand Library',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Festival Market',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
        ],
      },
      {
        cityName : 'Coastalbay',
        attractions : [
          {
            attractionName : 'Sandy Beach',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Ocean Aquarium',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Coastal Park',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
          {
            attractionName : 'Bay Market',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Sunset Pier',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Marine Museum',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
        ],
      },
      {
        cityName : 'Highland',
        attractions : [
          {
            attractionName : 'Mountain Viewpoint',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Highland Zoo',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Eagle Park',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
          {
            attractionName : 'Highland Market',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Old Town',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Museum of Highland',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
        ],
      },
      {
        cityName : 'Riverfork',
        attractions : [
          {
            attractionName : 'Riverwalk',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Forking Gardens',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Riverfork Museum',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
          {
            attractionName : 'Aquatic Center',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Historic Bridge',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'River Market',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
        ],
      },
      {
        cityName : 'Pinecrest',
        attractions : [
          {
            attractionName : 'Pine Forest',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Crest Museum',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Pinecrest Gardens',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
          {
            attractionName : 'Old Pine Church',
            image : 'https://via.placeholder.com/150',
            rating : 4,
          },
          {
            attractionName : 'Pine Market',
            image : 'https://via.placeholder.com/150',
            rating : 5,
          },
          {
            attractionName : 'Crest Theater',
            image : 'https://via.placeholder.com/150',
            rating : 3,
          },
        ],
      },
    ]

    const Home = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0)
  const currentCity = citiesData[currentCityIndex]

  const prevCity = () => {
    setCurrentCityIndex((prevIndex) =>
      prevIndex === 0 ? citiesData.length - 1 : prevIndex - 1,
    )
  }

  const nextCity = () => {
    setCurrentCityIndex((prevIndex) =>
      prevIndex === citiesData.length - 1 ? 0 : prevIndex + 1,
    )
  }

  // Function to handle 'Select All' button click (functionality to be added)
  const selectAllAttractions = () => {
    // Functionality to be implemented
  }

  return (
    <Flex direction="column" height="100vh" overflow="hidden">
      {/* City Selector */}
      <Flex justifyContent="center" alignItems="center" my={4}>
        <Button
          onClick={() =>
            setCurrentCityIndex((prevIndex) =>
              prevIndex === 0 ? citiesData.length - 1 : prevIndex - 1,
            )
          }
        >
          &larr;
        </Button>
        <Text mx={8} fontWeight="bold">
          {currentCity.cityName}
        </Text>
        <Button
          onClick={() =>
            setCurrentCityIndex((prevIndex) =>
              prevIndex === citiesData.length - 1 ? 0 : prevIndex + 1,
            )
          }
        >
          &rarr;
        </Button>
      </Flex>

      {/* Attractions Grid */}
      <SimpleGrid
        flex="1"
        columns={{base: 1, md: 2, lg: 3}}
        spacing={10}
        px={4}
        py={2}
        overflowY="auto"
      >
        {currentCity.attractions.map((attraction, index) => (
          <AttractionCard
            key={index}
            name={attraction.attractionName}
            image={attraction.image}
            rating={attraction.rating}
          />
        ))}
      </SimpleGrid>

      {/* Bottom Section */}
      <Flex justifyContent="space-between" alignItems="center" mt="auto" p={4}>
        {/* Number of Attractions Select */}
        <Box>
          <Text display="inline-block" mr={2}>
            Num of attractions per stop:
          </Text>
          <Select
            display="inline-block"
            width="auto"
            placeholder="Select number"
          >
            {[...Array(6)].map((_, i) => (
              <option key={i} value={i + 3}>
                {i + 3}
              </option>
            ))}
          </Select>
        </Box>

        {/* Select All and Next City Buttons */}
        <Flex>
          <Button colorScheme="green" onClick={selectAllAttractions}>
            Select All
          </Button>
          <Button colorScheme="blue" onClick={nextCity} ml={2}>
            Next City
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
