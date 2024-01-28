'use client';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const LandingPage = ({ userButton }) => {
  const router = useRouter(); // Create an instance of the router

  const handleGetStartedClick = () => {
    router.push('/wizard'); // Redirect to the '/wizard' route
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
      <Flex
        direction="column"
        height="100vh"
        justifyContent="flex-start"
        pt="20vh"
      >
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

            <Text fontSize="lg" size = "2xl" mb="6" color="gray.500">
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
            alignItems="stretch" // Ensure child components stretch to fill the container
            justifyContent="center"
            mb={6}
            wrap="wrap" // Enable wrapping for responsiveness
            gap={6} // Add space between cards
          >
            {[
              "Discover Hidden Treasures",
              "Plan Itineraries Effortless",
              "Navigate Seamlessly Real-Time",
            ].map((title, index) => (
              <Box
                key={index}
                flex="1" // Flex-grow to make all boxes the same width
                minW="300px" // Minimum width for responsiveness
                bg="whiteAlpha.800"
                p={8} // Increased padding
                borderRadius="lg" // Larger border radius
                boxShadow="xl" // Add shadow for depth
                d="flex"
                flexDirection="column" // Stack children vertically
                justifyContent="space-between" // Space out the content
                height="100%" // Make boxes fill the flex container
              >
                <Heading
                  fontSize="4xl"
                  mb={6}
                  textAlign="center"
                  fontWeight="bold"
                  color="purple.900"
                >
                  {title}
                </Heading>
                <Text fontSize="xl" mb={4} color="purple.900">
                  {index === 0 &&
                    "Xplore revolutionizes travel by guiding you to hidden gems and local favorites. Experience unique destinations like never before with personalized recommendations tailored to your interests and travel style."}
                  {index === 1 &&
                    "Say goodbye to travel planning headaches! Xplore's intuitive interface simplifies itinerary creation, allowing you to seamlessly plan your journey, from accommodations to activities, all in one convenient app."}
                  {index === 2 &&
                    "Stay informed and navigate effortlessly with Xplore's real-time GPS and location-based insights. Whether you're seeking the best nearby dining spots or looking for the shortest route to your next adventure, Xplore has you covered."}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
      <Box as="footer" bg="purple.900" py={2} textAlign="center">
        <Text fontSize="sm" color="gray.200">
          Powered by Yelp API, Google Cloud API, OpenAI API
        </Text>
      </Box>
    </Container>
  );
};

export default LandingPage;
