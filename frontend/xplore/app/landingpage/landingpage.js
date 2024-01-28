"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Correct the import for useRouter
import { Box, Heading, Text, Button, Container, Flex } from "@chakra-ui/react";

const LandingPage = () => {
  const router = useRouter(); // Create an instance of the router

  const handleGetStartedClick = () => {
    router.push("/city-select");
  };

  return (
    <Container
      maxW="100%"
      p={0}
      bgImage="url('/bg1.png')" // Set the background image using the correct path
      bgPosition="center 10%" // Center the background image
      bgRepeat="no-repeat" // Do not repeat the background image
      bgSize="cover"
    >
      <Flex direction="column" height="100vh" justifyContent="flex-start" pt = "20vh" >
        <Flex
          direction="column"
          justify="center" 
          align="center" 
          textAlign="center" 
          p={4}
        >
          {/* Rounded rectangular box */}
          <Box
            maxWidth="52%"
            w="full" 
            mx="auto" 
            p={12} // Padding inside the box
            bg="whiteAlpha.800" // Light color background with some transparency
            borderRadius="64px" // Rounded corners
            boxShadow="lg" // Optional shadow for depth
          >
            <Heading as="h1" size="3xl" mb="4" color="purple.900">
              Plan. Discover.{" "}
              <Box as="span" color="purple.500">
                Xplore.
              </Box>
            </Heading>
            <Text fontSize="xl" mb="6" color="gray.600">
              {" "}
              {/* Reduced bottom margin */}
              The best travel companion ever!
            </Text>
            <Button
              colorScheme="purple"
              size="xl"
              fontSize="2xl"
              px={8}
              py={6}
              mb={4}
              _hover={{ bg: "purple.600" }}
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="column" p={4}>
        <Box height={"92vh"} alignItems={"center"}>
          <Flex
            width="100%"
            height="100vh"
            alignItems={"center"}
            justifyContent="center"
            mb={6}
          >
            <Box width="100%" bg="purple.200" p={4} borderRadius="md" mr={4}>
              {" "}
              {/* Width 100% */}
              <Text fontSize="lg">Feature One</Text>
              <Text fontSize="md">Blah</Text>
            </Box>
            <Box width="100%" bg="purple.200" p={4} borderRadius="md" mr={4}>
              {" "}
              {/* Width 100% */}
              <Text fontSize="lg">Feature Two</Text>
              <Text fontSize="md">Blah</Text>
            </Box>
            <Box width="100%" bg="purple.200" p={4} borderRadius="md">
              {" "}
              {/* Width 100% */}
              <Text fontSize="lg">Feature Three</Text>
              <Text fontSize="md">Blah</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box as="footer" bg="purple.100" py={2} textAlign="center">
        <Text fontSize="sm" color="gray.600">
          Powered by Yelp API, Google Cloud API, OpenAI API
        </Text>
      </Box>
    </Container>
  );
};

export default LandingPage;
