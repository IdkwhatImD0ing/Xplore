// components/DayAccordion.js
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const DayAccordion = ({ route }) => {
  return (
    <Accordion allowMultiple>
      {route.map((dayPlan, index) => (
        <AccordionItem key={index}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Day{index + 1}
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
  );
};

export default DayAccordion;
