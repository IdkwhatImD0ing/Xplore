import React from "react";
import {
  Button,
  Image,
  Flex,
  Stack,
  Box, // Import the Box component
} from "@chakra-ui/react";

const Navbar = ({ userButton }) => {
  return (
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
        maxW="65px"
        height="auto"
      />
      <Stack direction="row" spacing={4} align="center">
        <Button
          colorScheme="purple"
          bg="purple.300"
          _hover={{ bg: "purple.400" }}
          width="100px" // Set a fixed width for the button
        >
          Sign In
        </Button>
        <Button
          colorScheme="purple"
          bg="purple.300"
          _hover={{ bg: "purple.400" }}
          width="100px" // Set a fixed width for the button
        >
          Sign Up
        </Button>
        <Box pr={2}> {/* Add padding on the right side of the userButton */}
          {userButton} {/* Render the UserButton component here */}
        </Box>
      </Stack>
    </Flex>
  );
};

export default Navbar;