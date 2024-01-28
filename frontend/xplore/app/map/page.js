"use client";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import RouteSelector from "./RouteSelector";
import DayAccordion from "./DayAccordion";

const routePlans = [
  [
    {
      startLocation: { name: "Green Park", address: "101 Green St" },
      endLocation: { name: "Sunset Hill", address: "501 Sunset Ave" },
      route: [
        { name: "Lakeside Cafe", address: "201 Lake Rd" },
        { name: "River Bookstore", address: "301 River Ln" },
        { name: "Art Museum", address: "401 Art Pkwy" },
      ],
    },
    {
      startLocation: { name: "City Hall", address: "102 City St" },
      endLocation: { name: "Grand Station", address: "502 Station Ave" },
      route: [
        { name: "Central Garden", address: "202 Garden Rd" },
        { name: "Downtown Theater", address: "302 Theater Ln" },
        { name: "History Gallery", address: "402 Gallery Pkwy" },
      ],
    },
    {
      startLocation: { name: "Tech Square", address: "103 Tech St" },
      endLocation: {
        name: "Innovation Fountain",
        address: "503 Innovation Ave",
      },
      route: [
        { name: "Coffee Corner", address: "203 Coffee Rd" },
        { name: "Tech Library", address: "303 Library Ln" },
        { name: "Science Aquarium", address: "403 Aquarium Pkwy" },
      ],
    },
    {
      startLocation: { name: "Heritage Monument", address: "104 Heritage St" },
      endLocation: { name: "University Campus", address: "504 University Ave" },
      route: [
        { name: "Old Bakery", address: "204 Bakery Rd" },
        { name: "Creative Studio", address: "304 Studio Ln" },
        { name: "Harbor View", address: "404 Harbor Pkwy" },
      ],
    },
    {
      startLocation: { name: "Coastal Pier", address: "105 Coastal St" },
      endLocation: { name: "Lighthouse Tower", address: "505 Lighthouse Ave" },
      route: [
        { name: "Seaside Market", address: "205 Market Rd" },
        { name: "Ocean Restaurant", address: "305 Restaurant Ln" },
        { name: "Sandy Beach", address: "405 Beach Pkwy" },
      ],
    },
  ],
  [
    {
      startLocation: { name: "Meadow Park", address: "111 Meadow St" },
      endLocation: { name: "Rose Garden", address: "611 Rose Ave" },
      route: [
        { name: "Flower Cafe", address: "211 Flower Rd" },
        { name: "Green Bookstore", address: "311 Book Ln" },
        { name: "Nature Museum", address: "411 Nature Pkwy" },
      ],
    },
    {
      startLocation: { name: "Town Plaza", address: "112 Plaza St" },
      endLocation: { name: "Victory Bridge", address: "612 Victory Ave" },
      route: [
        { name: "Plaza Garden", address: "212 Plaza Rd" },
        { name: "Open Theater", address: "312 Theater Ln" },
        { name: "Artists Gallery", address: "412 Gallery Pkwy" },
      ],
    },
    {
      startLocation: {
        name: "Innovation Square",
        address: "113 Innovation St",
      },
      endLocation: { name: "Fountain Square", address: "613 Fountain Ave" },
      route: [
        { name: "Bistro Cafe", address: "213 Bistro Rd" },
        { name: "Square Library", address: "313 Library Ln" },
        { name: "Tech Aquarium", address: "413 Tech Pkwy" },
      ],
    },
    {
      startLocation: { name: "Monument Park", address: "114 Monument St" },
      endLocation: { name: "Academic Campus", address: "614 Campus Ave" },
      route: [
        { name: "Campus Bakery", address: "214 Bakery Rd" },
        { name: "Design Studio", address: "314 Studio Ln" },
        { name: "Campus Harbor", address: "414 Harbor Pkwy" },
      ],
    },
    {
      startLocation: { name: "Pier Point", address: "115 Pier St" },
      endLocation: { name: "Watch Tower", address: "615 Watch Ave" },
      route: [
        { name: "Pier Market", address: "215 Market Rd" },
        { name: "Cliffside Restaurant", address: "315 Restaurant Ln" },
        { name: "Cliff Beach", address: "415 Beach Pkwy" },
      ],
    },
  ],
];

const MapPage = () => {
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);

  const currentRoute = routePlans[currentRouteIndex];

  const nextRoute = () => {
    setCurrentRouteIndex((prevIndex) => (prevIndex + 1) % routePlans.length);
  };

  const prevRoute = () => {
    setCurrentRouteIndex((prevIndex) =>
      prevIndex === 0 ? routePlans.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Flex w="100%" h="100vh">
      <Box flex="1" maxWidth="300px">
        {" "}
        {/* Adjust maxWidth as needed */}
        <RouteSelector
          currentRouteIndex={currentRouteIndex}
          totalRoutes={routePlans.length}
          nextRoute={nextRoute}
          prevRoute={prevRoute}
        />
        <DayAccordion route={currentRoute} />
      </Box>
      <Box flex="2" p={5}>
        {/* Map component will go here */}
        <Button
          colorScheme="green"
          position="absolute"
          right="16px"
          bottom="16px"
        >
          Use this route
        </Button>
      </Box>
    </Flex>
  );
};

export default MapPage;
