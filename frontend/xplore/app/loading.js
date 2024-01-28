import { Spinner, Flex, Box, Text } from '@chakra-ui/react';

const LoadingPage = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Box mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Loading...
        </Text>
      </Box>
    </Flex>
  );
};

export default LoadingPage;
