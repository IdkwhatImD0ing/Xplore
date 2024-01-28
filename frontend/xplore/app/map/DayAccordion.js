// components/DayAccordion.js
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
  Text,
} from '@chakra-ui/react'

const DayAccordion = ({route}) => {
  return (
    <Accordion allowMultiple>
      {route.map((dayPlan, index) => (
        <AccordionItem key={index}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Day {index + 1}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align="stretch">
              {dayPlan.route.map((attraction, attractionIndex) => (
                <Text key={attractionIndex}>{attraction.name}</Text>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default DayAccordion
