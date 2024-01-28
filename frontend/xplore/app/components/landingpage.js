import React from 'react';
import { Box, Heading, Text, Button, Image, Container, Flex, Spacer } from '@chakra-ui/react';

const LandingPage = () => {
    const currentYear = new Date().getFullYear();
  return (
    <Container maxW="100%" p={0}>
      <Flex direction="column">
{/* Header with Sign In button */}
<Flex as="header" align="center" justify="space-between" bg="purple.500" p={4} color="white">
          <Image src="/images/logo.png" alt="Company Logo" maxW="80%" height="auto" mb="4" />
          <Button colorScheme="purple" bg="purple.300" _hover={{ bg: 'purple.400' }}>Sign In</Button>
        </Flex>

        {/* Main Content */}
        <Flex direction="column" justify="center" align="center" textAlign="center" p={4} minHeight="100vh">
          <Box maxWidth="90%" w="full" mx="auto">
            <Heading as="h1" size="4xl" mb="4" color="purple.500">
              Welcome to Our App
            </Heading>
            <Text fontSize="md" mb="10" color="gray.600"> {/* Increased bottom margin */}
              Subtitle text goes here. Briefly describe what your app does.
            </Text>

            
            <Button colorScheme="purple" size="lg" mb={6} _hover={{ bg: 'purple.600' }}>
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
                <Text fontSize="md">Description of feature one... "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
              </Box>
              <Box width="30%" bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="lg">Feature Two</Text>
                <Text fontSize="md">Description of feature two... "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
              </Box>
              <Box width="30%" bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="lg">Feature Three</Text>
                <Text fontSize="md">Description of feature three... "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
              </Box>
            </Flex>
            </Box>


          <Text mt="4" fontSize="md" textAlign="center">
            Discover more about what makes our app unique. Explore features, read testimonials, and see why users love it.
          </Text>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="purple.100" py={4} textAlign="center">
          <Text fontSize="sm" color="gray.600">
            Powered by hahahahahahaha who
          </Text>
          {/* Additional footer content (if any) */}
        </Box>
      </Flex>
    </Container>
  );
};

export default LandingPage;
