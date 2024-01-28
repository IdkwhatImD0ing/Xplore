// components/RouteSelector.js
import React from 'react'
import {Box, Button, Text, Flex} from '@chakra-ui/react'

const RouteSelector = ({
  currentRouteIndex,
  totalRoutes,
  nextRoute,
  prevRoute,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center" my={4}>
      <Button onClick={prevRoute}>&larr;</Button>
      <Text mx={8} fontWeight="bold">
        Route {currentRouteIndex + 1} of {totalRoutes}
      </Text>
      <Button onClick={nextRoute}>&rarr;</Button>
    </Flex>
  )
}

export default RouteSelector
