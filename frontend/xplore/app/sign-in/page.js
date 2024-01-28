"use client";

import {SignIn} from "@clerk/nextjs";
import {Container, VStack} from "@chakra-ui/react";

export default function SignInPage() {
  return (
    <Container
  minH = "100vh"
  minW = "100vw"
  display = "flex"
  alignItems = "center"
  justifyContent = "center"
      bgGradient="linear(to-r, teal.200, blue.200)" // Example gradient background
    >
      <VStack spacing={8} w="full" maxW="md" px={6}>
        <SignIn />
      </VStack>
    </Container>
  );
}