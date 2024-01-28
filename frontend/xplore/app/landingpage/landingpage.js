import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Container,
  Flex,
  Spacer,
} from '@chakra-ui/react'

const LandingPage = ({userButton}) => {
  const currentYear = new Date().getFullYear()
  return (
    <Container maxW="100%" backgroundColor={'black'} p={0}>
      <Flex direction="column">
        {/* Header with Sign In button */}
        <Flex
          as="header"
          align="center"
          justify="space-between"
          bg="purple.500"
          p={3}
          color="white"
        >
          <Image
            src="/icons/icon-192x192.png"
            alt="Company Logo"
            maxW="75px"
            height="auto"
          />
          <Flex justify="space-between" alignItems={"center"}>
          <Spacer />
          <Button
            colorScheme="purple"
            bg="purple.300"
            mr={2}
            _hover={{bg: 'purple.400'}}
          >
            Sign In
          </Button>
          <Button
            colorScheme="purple"
            bg="purple.300"
            mr={2}
            _hover={{bg: 'purple.400'}}
          >
            Sign Up
          </Button>

          {userButton} {/* Render the UserButton component here */}

          </Flex>
        </Flex>

        {/* Main Content */}
        <Flex
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          p={4}
          minHeight="100vh"
        >
          <Box maxWidth="90%" w="full" mx="auto"> 
          <Heading as="h1" size="4xl" mb="4" color="purple.500">
  Plan. Discover. {' '}
  <Text as="span" color="purple.200">
    Xplore.
  </Text>
</Heading>

            <Text fontSize="md" mb="10" color="gray.400">
              {' '}
              {/* Increased bottom margin */}
              The best travel companion ever!
            </Text>

            <Button
              colorScheme="purple"
              size="lg"
              mb={6}
              _hover={{bg: 'purple.600'}}
            >
              Get Started
            </Button>
          </Box>
        </Flex>

        {/* Additional Content */}
        <Flex direction="column" p={4}>
          <Box height={"92vh"} alignItems={"center"}>
    <Flex width = "100%" height="100vh" alignItems={'center'} justifyContent="center" mb={6}>
      <Box width="100%" bg="purple.200" p={4} borderRadius="md" mr={4}> {/* Width 100% */}
        <Text fontSize="lg">Feature One</Text>
        <Text fontSize="md">Blah</Text>
      </Box>
      <Box width="100%" bg="purple.200" p={4} borderRadius="md" mr={4}> {/* Width 100% */}
        <Text fontSize="lg">Feature Two</Text>
        <Text fontSize="md">Blah</Text>
      </Box>
      <Box width="100%" bg="purple.200" p={4} borderRadius="md"> {/* Width 100% */}
        <Text fontSize="lg">Feature Three</Text>
        <Text fontSize="md">Blah</Text>
      </Box>
    </Flex>
    </Box>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="purple.100" py={2} textAlign="center">
          <Text fontSize="sm" color="gray.600">
            Powered by Yelp API, Google Cloud API, OpenAI API
          </Text>
          {/* Additional footer content (if any) */}
        </Box>
      </Flex>
    </Container>
  )
}

export default LandingPage
