import {Badge, Box, Checkbox, Flex, Image, Text} from '@chakra-ui/react'

const AttractionCard = ({
  attraction,
  selectedAttractions,
  setSelectedAttractions,
}) => {
  const isSelected = selectedAttractions.includes(attraction)

  const toggleSelection = () => {
    setSelectedAttractions((prevSelected) => {
      if (isSelected) {
        // Remove the attraction from the selected list
        return prevSelected.filter(
          (selected) => selected.name !== attraction.name,
        )
      } else {
        // Add the attraction to the selected list
        return [...prevSelected, attraction]
      }
    })
  }
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      minH="300px"
    >
      {' '}
      <Image
        src={attraction.photo}
        alt={`Image of ${attraction.name}`}
        width="100%"
        objectFit="cover"
        height="70%" // 70% of the parent's height is allocated to the image
      />
      <Flex direction="column" p="4" height="30%">
        <Flex justify="space-between" align="center" mb="2">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {`${attraction.rating} stars`}
          </Badge>
          <Checkbox
            size="lg"
            colorScheme="teal"
            isChecked={isSelected}
            onChange={toggleSelection}
          />
        </Flex>
        <Text fontWeight="bold" isTruncated flex="1">
          {attraction.name}
        </Text>
      </Flex>
    </Box>
  )
}

export default AttractionCard
