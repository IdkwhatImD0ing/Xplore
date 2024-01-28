import {Box, Image, Text, Badge, Checkbox, Flex} from '@chakra-ui/react'

const AttractionCard = ({name, image, rating}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      minH="300px"
    >
      <Image
        src={image}
        alt={`Image of ${name}`}
        width="100%"
        objectFit="cover"
        height="70%" // 70% of the parent's height is allocated to the image
      />
      <Flex justify="space-between" align="center" p="4" height="30%">
        <Checkbox size="lg" colorScheme="teal" />
        <Text fontWeight="bold" isTruncated flex="1" mx="2">
          {name}
        </Text>
        <Badge borderRadius="full" px="2" colorScheme="teal" ml="2">
          {`${rating} stars`}
        </Badge>
      </Flex>
    </Box>
  )
}

export default AttractionCard
