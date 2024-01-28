'use client';

import React from "react";
import {useRouter} from 'next/navigation';
import {
  Button,
  Image,
  Flex,
  Stack,
  Box,
} from "@chakra-ui/react";

const Navbar = ({userButton}) => {
  const router = useRouter(); // Create an instance of the router

  const handleSignInClick = () => { router.push('/sign-in'); };

  const handleSignUpClick = () => { router.push('/sign-up'); };

  const handleLogoClick = () => { router.push('/'); };

  return (
    <Flex
      as="header"
  align = "center"
  justify = "space-between"
  bg = "purple.500"
  p = {3} color = "white" > < Image
  src = "/icons/icon-192x192.png"
  alt = "Company Logo"
  maxW = "65px"
  height = "auto"
  cursor = "pointer"
  onClick =
  {
    handleLogoClick
  } />
      <Stack direction="row" spacing={4} align="center">
        <Button
          colorScheme="purple"
          bg="purple.300"
          _hover={{ bg: "purple.400" }}
          width="100px"
          onClick={handleSignInClick}
        >
          Sign In
        </Button >
      < Button
  colorScheme = "purple"
  bg = "purple.300"
  _hover = {
    { bg: "purple.400" }
  } width = "100px"
          onClick={handleSignUpClick} 
        >
          Sign Up
        </Button>
        <Box pr={2}>
          {userButton} 
        </Box>
      </Stack>
    </Flex>
  );
};

export default Navbar;