'use client'
import {Box, Button, Text, Flex} from '@chakra-ui/react'
import React, {useState} from 'react'
import RouteSelector from './RouteSelector'
import DayAccordion from './DayAccordion'

const MapPage = ({routePlans}) => {
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0)

  const currentRoute = routePlans[currentRouteIndex]

  const nextRoute = () => {
    setCurrentRouteIndex((prevIndex) => (prevIndex + 1) % routePlans.length)
  }

  const prevRoute = () => {
    setCurrentRouteIndex((prevIndex) =>
      prevIndex === 0 ? routePlans.length - 1 : prevIndex - 1,
    )
  }

  return (
    <Flex w="100%" h="100vh">
      <Box flex="1" maxWidth="300px">
        {' '}
        {/* Adjust maxWidth as needed */}
        <RouteSelector
          currentRouteIndex={currentRouteIndex}
          totalRoutes={routePlans.length}
          nextRoute={nextRoute}
          prevRoute={prevRoute}
        />
        <DayAccordion route={currentRoute} />
      </Box>
      <Box flex="2" p={5}>
        {/* Map component will go here */}
        <Button
          colorScheme="green"
          position="absolute"
          right="16px"
          bottom="16px"
        >
          Use this route
        </Button>
      </Box>
    </Flex>
  )
}

export default MapPage
