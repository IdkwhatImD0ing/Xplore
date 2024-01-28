import { Input, InputGroup, Flex, Spacer, Box } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    Heading,
    Center
} from '@chakra-ui/react';

const CityInput = () => {
    return (
        <>
            <Center>
                <Heading as='h2' paddingTop="1rem">Input Cities</Heading>
            </Center>
            <form>
                <FormControl isRequired>
                    <Flex align="center" mt={4}>
                        <InputGroup size="md" flex="1">
                            <Input type='text' placeholder='Enter City'/>
                        </InputGroup>
                        
                        <NumberInput max={50} min={1} ml={4}>
                            <NumberInputField placeholder='# Days'/>
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <FormLabel ml={2} mb={0}>Days</FormLabel>
                        
                        <Box pl={2}>
                            <Button colorScheme='teal' type='submit'>Add Stop</Button>
                        </Box>
                    </Flex>
                </FormControl>
            </form>
        </>
    );
};

export { CityInput };