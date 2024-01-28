"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { Box, Heading, Text, Button, Container, Flex } from "@chakra-ui/react";

const LandingPage = () => {
  const router = useRouter(); // Create an instance of the router

  const handleGetStartedClick = () => {
    router.push("/city-select");
  };

  return (
    <Container maxW="100%" p={0}>
      <Flex direction="column">
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
              The best travel companion ever!
            </Text>

            <Button
              colorScheme="purple"
              size="lg"
              mb={6}
              _hover={{ bg: "purple.600" }}
              onClick={handleGetStartedClick} // Attach the onClick event
            >
              Get Started
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default LandingPage;
