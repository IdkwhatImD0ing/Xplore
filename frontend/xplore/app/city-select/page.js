"use client";
import { CityInput } from "./cityinput";
import { AttractionTypeInput } from "./attractiontypeinput";
import CityList from "./citylist";
import styles from "./page.module.css";
import { Heading, Button, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Heading
        as="h1"
        textAlign="center"
        my="2rem"
        fontWeight="bold"
        bgGradient="linear(to-l, #319795, #305796)"
        bgClip="text"
        p="20px"
      >
        {" "}
        Where are you going ?{" "}
      </Heading>
      <div>
        <CityInput />
        <CityList />
        <AttractionTypeInput />
        <Center mt="0.2rem">
          <Button colorScheme="teal" type="submit">
            Continue
          </Button>
        </Center>
      </div>
    </main>
  );
}
