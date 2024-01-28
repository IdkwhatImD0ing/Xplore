import {ChakraProvider} from '@chakra-ui/react';
import {UserButton} from "@clerk/nextjs";
import {User} from "@clerk/nextjs/dist/types/server";
import Image from "next/image";
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

import {AttractionResultsOutput} from "./components/attractionresultsoutput";
import {AttractionTypeInput} from "./components/attractiontypeinput";
import {CalculateRoutes} from "./components/calculateroutes";
import {CityInput} from "./components/cityinput";
import {DaySwitcher} from "./components/dayswitcher";
import LandingPage from './components/landingpage';
import styles from "./page.module.css";

function App() {
  return (
    <ChakraProvider>
      <UserButton />
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
