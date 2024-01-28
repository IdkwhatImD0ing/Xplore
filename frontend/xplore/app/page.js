import Image from "next/image";
import styles from "./page.module.css";
import { CityInput } from "./components/cityinput";
import { AttractionTypeInput } from "./components/attractiontypeinput";
import { AttractionResultsOutput } from "./components/attractionresultsoutput";
import { DaySwitcher } from "./components/dayswitcher";
import { CalculateRoutes } from "./components/calculateroutes";

export default function Home() {
  return (
    <main className={styles.main}>
      <div id="leftcol">
        <CityInput />
        <AttractionTypeInput />
      </div>
      <div id="rightcol">
        <AttractionResultsOutput />
        <DaySwitcher />
        <CalculateRoutes />
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <div> </div>
//   )
  
// }
