import Image from "next/image";
import styles from "./page.module.css";
import { CityInput } from "./components/cityinput";
import { AttractionTypeInput } from "./components/attractiontypeinput";
import { AttractionResultsOutput } from "./components/attractionresultsoutput";
import { DaySwitcher } from "./components/dayswitcher";
import { CalculateRoutes } from "./components/calculateroutes";
import { UserButton } from "@clerk/nextjs";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div id="leftcol">
//         <CityInput />
//         <AttractionTypeInput />
//       </div>
//       <div id="rightcol">
//         <AttractionResultsOutput />
//         <DaySwitcher />
//         <CalculateRoutes />
//       </div>
//     </main>
//   );
// }

// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from './components/landingpage';
import { User } from "@clerk/nextjs/dist/types/server";

function App() {
  return (
    <ChakraProvider>
      <UserButton />
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
