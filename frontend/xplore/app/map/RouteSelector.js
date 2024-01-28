// components/RouteSelector.js
import {Box, Button, Flex, Text} from '@chakra-ui/react'
import React from 'react'

const RouteSelector =
    ({
      currentRouteIndex,
      totalRoutes,
      nextRoute,
      prevRoute,
    }) => {
      return (
          <Flex justifyContent = "center" alignItems = "center" my = {4}>
              <Button onClick = {prevRoute}>&
              larr;
          </Button>
      <Text mx={8} fontWeight="bold">
        Route {currentRouteIndex + 1} of {totalRoutes}
      </Text>
          <Button onClick = {nextRoute}>&
          rarr;
          </Button>
    </Flex>)
    }

export default RouteSelector
