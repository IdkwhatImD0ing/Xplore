'use client'
import MapComponent from './MapComponent'
import{Box, Button, Text, Flex} from '@chakra-ui/react'
import React, {useState} from 'react'
import RouteSelector from './RouteSelector'
import DayAccordion from './DayAccordion'

const MapPage = ({routePlans}) => {
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0)
  const [expandedDayIndex, setExpandedDayIndex] =
      useState(0) // State to keep track of the expanded day

  const currentRoute = routePlans[currentRouteIndex]
  const currentDay = currentRoute[expandedDayIndex] // currentDay is an array of points of interest
  // [{name: 'attraction', lat: 0, lon: 0}, ...]

  const nextRoute = () => {
    setCurrentRouteIndex((prevIndex) => (prevIndex + 1) % routePlans.length)
  }

  const prevRoute = () => {
    setCurrentRouteIndex(
        (prevIndex) => prevIndex === 0 ? routePlans.length - 1 : prevIndex - 1,
    )
  }

  return (
    <Flex w="100%" h="100vh">
      <Box flex="1" maxWidth="300px">
        <RouteSelector
  currentRouteIndex = {currentRouteIndex} totalRoutes =
      {routePlans.length} nextRoute = {nextRoute} prevRoute =
  {
    prevRoute
  } />
        <DayAccordion
          route={currentRoute}
          expandedDayIndex={expandedDayIndex}
          setExpandedDayIndex={setExpandedDayIndex}
        / >
      </Box>
      <Box flex="2" p={5}>
        {currentRoute && <MapComponent currentDay={currentDay} />
} < Button
colorScheme = "green"
position = "absolute"
left = "16px"
bottom = "16px" > Use this route</Button>
      </Box><
         /Flex>
  )
}

export default MapPage
