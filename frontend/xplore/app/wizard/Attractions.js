'use client'

import React, {useState} from 'react'
import {Box, Button, SimpleGrid, Text, Flex, Select} from '@chakra-ui/react'
import AttractionCard from './AttractionCard'

const Attractions = ({
  attractions,
  selectedAttractions,
  setSelectedAttractions,
  submitAttractions,
}) => {
  // Function to handle 'Select All' button click (functionality to be added)
  const selectAllAttractions = () => {
    setSelectedAttractions(attractions.map((attraction) => attraction))
  }

  return (
    <Flex direction="column" height="100vh" overflow="hidden">
      {/* Attractions Grid */}
      <SimpleGrid
        flex="1"
        columns={{base: 1, md: 2, lg: 3}}
        spacing={10}
        px={4}
        py={2}
        overflowY="auto"
      >
        {attractions.map((attraction, index) => (
          <AttractionCard
            key={index}
            attraction={attraction}
            selectedAttractions={selectedAttractions}
            setSelectedAttractions={setSelectedAttractions}
          />
        ))}
      </SimpleGrid>

      {/* Bottom Section */}
      <Flex justifyContent="space-between" alignItems="center" mt="auto" p={4}>
        {/* Number of Attractions Select */}
        <Box>
          <Select
            display="inline-block"
            width="auto"
            placeholder="Select number"
          >
            {/* Options for number of attractions */}
            {[...Array(3)].map((_, i) => (
              <option key={i} value={i + 3}>
                {i + 3}
              </option>
            ))}
          </Select>
        </Box>

        {/* Select All and Next City Buttons */}
        <Flex>
          <Button colorScheme="green"  mr={2} onClick={selectAllAttractions}>
            Select All
          </Button>
          <Button colorScheme="teal" onClick={submitAttractions}>
            Generate routes
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Attractions
