import { CityInput } from "./components/cityinput";
import { AttractionTypeInput } from "./components/attractiontypeinput";
import { AttractionResultsOutput } from "./components/attractionresultsoutput"
import { useState } from "react";
import { ItineraryContext } from "./contexts";

export default function Home() {
  const [location, setLocation] = useState([]);

  return (
    <main className="flex flex-row items-start justify-between m-8">
      <div className="flex flex-col">
        <CityInput />
        <AttractionTypeInput />
      </div>
      <AttractionResultsOutput />
    </main>
  );
}
