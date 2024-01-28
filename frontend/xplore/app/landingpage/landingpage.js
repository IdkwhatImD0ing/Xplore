import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Flex,
} from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Container maxW="100%" p={0}>
      <Flex direction="column">
        {/* Header with Sign In button */}
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
              Plan. Discover. Xplore.
            </Heading>
            <Text fontSize="md" mb="10" color="gray.600">
              {" "}
              {/* Increased bottom margin */}
              The best travel companion ever!
            </Text>

            <Button
              colorScheme="purple"
              size="lg"
              mb={6}
              _hover={{ bg: "purple.600" }}
            >
              Get Started
            </Button>
          </Box>
        </Flex>

        {/* Additional Content */}
        <Flex direction="column" p={4}>
          <Box maxWidth="1200px" mx="auto" p={4}>
            <Flex justify="space-between" mb={6}>
              <Box width="30%" bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="lg">Feature One</Text>
                <Text fontSize="md">Blah</Text>
              </Box>
              <Box width="30%" bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="lg">Feature Two</Text>
                <Text fontSize="md">Blah</Text>
              </Box>
              <Box width="30%" bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="lg">Feature Three</Text>
                <Text fontSize="md">Blah</Text>
              </Box>
            </Flex>
          </Box>

          <Text mt="4" fontSize="md" textAlign="center">
            Ad astra abyssosque! Welcome to the Adventurers`&apos;` Guild.
          </Text>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="purple.100" py={4} textAlign="center">
          <Text fontSize="sm" color="gray.600">
            Powered by Yelp API, Google Cloud API, OpenAI API
          </Text>
          {/* Additional footer content (if any) */}
        </Box>
      </Flex>
    </Container>
  );
};

export default LandingPage;
