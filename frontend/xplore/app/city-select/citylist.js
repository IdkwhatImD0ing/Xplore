import {
    Box,
    List,
    ListItem,
    Editable,
    EditableInput,
    EditablePreview,
    HStack,
    VStack,
    IconButton,
    Text,
    Center,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
  
  const CityList = () => {
    let cities = [
      { city: 'New York', days: 3 },
      { city: 'Paris', days: 5 },
      { city: 'Tokyo', days: 4 }, // Added another city for testing
    ];
  
    // Define a responsive border style for reuse
    const borderStyle = {
      border: '1px solid',
      borderColor: 'gray.200', // You can change the color to match your theme
      borderRadius: 'md', // 'md' is equivalent to '4px'
      padding: ['0.5rem', '1rem'], // Responsive padding
    };
  
    // Adjust the size of the EditableInput based on the breakpoint
    const editableWidth = useBreakpointValue({ base: "75px", sm: "100px", md: "150px" });
  
    return (
      <Center py={["1rem", "2rem"]}>
        <VStack spacing={4} align="stretch" width={["90%", "80%", "70%", "60%"]}>
          <Box {...borderStyle}>
            <List w="100%">
              {cities.map((item, index) => (
                <ListItem key={index}>
                  <Box {...borderStyle}>
                    <HStack spacing={4} my='0.4rem'>
                      <Editable
                        defaultValue={item.city} fontWeight="bold"
                        flex={1}
                      >
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                      <Text>for</Text>
                      <Editable
                        defaultValue={item.days.toString()}
                        fontWeight="bold"
                      >
                        <EditablePreview width={editableWidth} textAlign="center" />
                        <EditableInput width={editableWidth} textAlign="center" />
                      </Editable>
                      <Text>days</Text>
                      <VStack>
                        {index !== 0 && (
                          <IconButton
                            size="sm"
                            aria-label={`Increase days for ${item.city}`}
                            icon={<ChevronUpIcon />}
                            // onClick={() => increaseDays(index)} // Add your logic to increase days
                          />
                        )}
                        {index !== cities.length - 1 && (
                          <IconButton
                            size="sm"
                            aria-label={`Decrease days for ${item.city}`}
                            icon={<ChevronDownIcon />}
                            // onClick={() => decreaseDays(index)} // Add your logic to decrease days
                          />
                        )}
                      </VStack>
                    </HStack>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </VStack>
      </Center>
    );
  };
  
  export default CityList;