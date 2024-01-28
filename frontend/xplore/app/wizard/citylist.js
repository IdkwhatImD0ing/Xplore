import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'
import {
  Box,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
  List,
  ListItem,
  Text,
  useBreakpointValue,
  VStack,
  Flex, 
} from '@chakra-ui/react'

const CityList = ({cities, setCities}) => {
  // Define a responsive border style for reuse
  const borderStyle = {
    border: '1px solid',
    borderColor: 'gray.200', // You can change the color to match your theme
    borderRadius: 'md', // 'md' is equivalent to '4px'
    p: 2, // Padding
  }

  // Adjust the size of the EditableInput based on the breakpoint
  const editableWidth = useBreakpointValue({
    base: '75px',
    sm: '100px',
    md: '150px',
  })

  const moveUp = (index) => {
    setCities((prevCities) => {
      if (index === 0) return prevCities // No change if it's the first item
      const newCities = [...prevCities]
      ;[newCities[index - 1], newCities[index]] = [
        newCities[index],
        newCities[index - 1],
      ]
      return newCities
    })
  }

  const moveDown = (index) => {
    setCities((prevCities) => {
      if (index === prevCities.length - 1) return prevCities // No change if it's the last item
      const newCities = [...prevCities]
      ;[newCities[index], newCities[index + 1]] = [
        newCities[index + 1],
        newCities[index],
      ]
      return newCities
    })
  }

  return (
      <Box py={['1rem', '2rem']} maxWidth='500px' w="100%" margin="auto">
        <VStack spacing={4} align="stretch">
          <Box {...borderStyle}>
            <List spacing={2}>
              {cities.map((item, index) => (
                <ListItem key={item.name} {...borderStyle}>
                  <Flex flexRow='horizontal' my="0.4rem" justifyContent='space-between'>
                    <Editable
                      defaultValue={item.name}
                      fontWeight="bold"
                      flex={1}
                      maxWidth="200px"
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                    {/* <Text>for</Text>
                    <Editable
                      defaultValue={item.days.toString()}
                      fontWeight="bold"
                      maxWidth="100px"
                    >
                      <EditablePreview width={editableWidth} textAlign="center" />
                      <EditableInput width={editableWidth} textAlign="center" />
                    </Editable>
                    <Text>days</Text> */}
                    <VStack align="center" minWidth="50px" spacing={1}>
                      {index !== 0 && (
                        <IconButton
                          size="sm"
                          aria-label={`Move ${item.name} up`}
                          icon={<ChevronUpIcon />}
                          onClick={() => moveUp(index)}
                        />
                      )}
                      {index !== cities.length - 1 && (
                        <IconButton
                          size="sm"
                          aria-label={`Move ${item.name} down`}
                          icon={<ChevronDownIcon />}
                          onClick={() => moveDown(index)}
                        />
                      )}
                    </VStack>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </Box>
        </VStack>
      </Box>
  )
}

export default CityList
