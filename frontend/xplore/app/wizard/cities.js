'use client'
import {CityInput} from './cityinput'
import {AttractionTypeInput} from './attractiontypeinput'
import CityList from './citylist'
import {
  Heading,
  Button,
  Center,
  Flex,
  VStack,
  Grid,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import {useState} from 'react'

export default function Cities({
  cities,
  setCities,
  preferences,
  setPreferences,
  continueFunction,
}) {

  const inputWidth = useBreakpointValue({
    base: '90%',
    sm: '80%',
    md: '60%',
    lg: '50%',
    xl: '40%',
  })

  return (
    <Flex
      direction="column" // sets the direction of children to be vertical
      align="center" // align items in the center horizontally
      justify="start" // justify content to start at the top
      minH="100vh" // minimum height to fill the screen
      w="100%" // width to fill the screen
      pt="2rem"
    >
      <Heading
        as="h1"
        textAlign="center"
        my="2rem"
        fontWeight="bold"
        bgGradient="linear(to-l, #319795, #305796)"
        bgClip="text"
        p="20px"
      >
        Where are you going?
      </Heading>
      <Grid
        templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} // 2 columns on medium screens and above
        gap={6}
        width="100%"
        px="4"
      >
        <Box>
          <CityInput setCities={setCities} />
          <CityList cities={cities} setCities={setCities} />
        </Box>
        <VStack
          spacing={4} // space between children
          align="start" // align items to the start of the container
        >
          <AttractionTypeInput
            preferences={preferences}
            setPreferences={setPreferences}
          />

          <Center width="100%">
            <Button colorScheme="teal" type="submit" onClick={continueFunction} width={inputWidth}>
              Continue
            </Button>
          </Center>
        </VStack>
      </Grid>
    </Flex>
  )
}
