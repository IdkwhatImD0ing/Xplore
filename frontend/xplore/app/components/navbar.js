import React from "react";
import {
  Button,
  Image,
  Flex,
  Spacer,
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
        mb="2"
      />
      <Flex justify="space-between">
        <Spacer />
        <Button
          colorScheme="purple"
          bg="purple.300"
          mr={2}
          _hover={{ bg: "purple.400" }}
        >
          Sign In
        </Button>
        <Button
          colorScheme="purple"
          bg="purple.300"
          mr={2}
          _hover={{ bg: "purple.400" }}
        >
          Sign Up
        </Button>
        {userButton} {/* Render the UserButton component here */}
      </Flex>
    </Flex>
  );
};

export default Navbar;
