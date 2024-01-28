import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
} from "@chakra-ui/react";

const CityInput = () => {
  return (
    <>
      <Center>
        <Heading as="h2" paddingTop="1rem">
          Input Cities
        </Heading>
      </Center>
      <form>
        <FormControl isRequired>
          <Flex align="center" mt={4}>
            <InputGroup size="md" flex="1">
              <Input type="text" placeholder="Enter City" />
            </InputGroup>

            <NumberInput max={50} min={1} ml={4}>
              <NumberInputField placeholder="# Days" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel ml={2} mb={0}>
              Days
            </FormLabel>

            <Box pl={2}>
              <Button colorScheme="teal" type="submit">
                Add Stop
              </Button>
            </Box>
          </Flex>
        </FormControl>
      </form>
    </>
  );
};

export { CityInput };
