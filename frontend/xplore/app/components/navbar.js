'use client'

import React from 'react'
import {useRouter} from 'next/navigation'
import {Button, Image, Flex, Stack, Box} from '@chakra-ui/react'
import {SignedOut, SignedIn, userButton} from '@clerk/nextjs'

const Navbar = ({userButton}) => {
  const router = useRouter()

  const handleSignInClick = () => {
    router.push('/sign-in')
  }

  const handleSignUpClick = () => {
    router.push('/sign-up')
  }

  const handleLogoClick = () => {
    router.push('/')
  }

  const handleWizardClick = () => {
    router.push('/wizard')
  }

  const handleMyRoutesClick = () => {
    router.push('/routes')
  }

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      bg="purple.900"
      p={3}
      color="white"
      position="absolute"
      top="0"
      left="0"
      right="0"
    >
      {' '}
      <Image
        src="/icons/icon-192x192.png"
        alt="Company Logo"
        maxW="65px"
        height="50px"
        cursor="pointer"
        onClick={handleLogoClick}
      />
      <Stack direction="row" spacing={4} align="center">
        <SignedOut>
          <Button
            colorScheme="purple"
            bg="purple.300"
            _hover={{bg: 'purple.400'}}
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
          <Button
            colorScheme="purple"
            bg="purple.300"
            _hover={{bg: 'purple.400'}}
            onClick={handleSignUpClick}
          >
            {' '}
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <Button
            colorScheme="purple"
            bg="purple.300"
            _hover={{bg: 'purple.400'}}
            onClick={handleWizardClick}
          >
            Wizard
          </Button>
          <Button
            colorScheme="purple"
            bg="purple.300"
            _hover={{bg: 'purple.400'}}
            onClick={handleMyRoutesClick}
          >
            My Routes
          </Button>
          <Box pr={2}>{userButton}</Box>
        </SignedIn>
      </Stack>
    </Flex>
  )
}

export default Navbar
