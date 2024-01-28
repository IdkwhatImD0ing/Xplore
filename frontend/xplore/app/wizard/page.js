"use client";
import { useState } from "react";
import Cities from "./cities";
import Attractions from "./Attractions";
import MapPage from "./MapPage";

export default function Wizard() {
  const [mode, setMode] = useState(0);
  const [cities, setCities] = useState([]);
  const [citiesObjects, setCitiesObjects] = useState([]); // [ {name: 'city', lat: 0, lng: 0}, ... ]
  const [preferences, setPreferences] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [routes, setRoutes] = useState([]);

  const citiesSubmit = () => {
    // Need to just get the name of cities into a list
    const cityNames = cities.map((city) => city.name);
    fetch("http://localhost:8000/attractions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cities: cityNames,
        preferences: preferences,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAttractions(data);
        return fetch("http://localhost:8000/geocode-multiple/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cities: cityNames }),
        });
      })
      .then((response) => response.json())
      .then((geocodeData) => {
        console.log(geocodeData);
        // Update citiesObjects with the geocode information
        setCitiesObjects(geocodeData);
        setMode(1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const submitAttractions = () => {
    // Ensure citiesObjects has at least 2 elements for start and end attractions
    if (citiesObjects.length < 2) {
      console.error("Not enough cities to generate start and end attractions.");
      return;
    }

    // Create startAttractions and endAttractions arrays
    const startAttractions = citiesObjects.slice(0, -1); // All except the last
    const endAttractions = citiesObjects.slice(1); // All except the first

    // Combine selectedAttractions and citiesObjects for the places array
    const places = [...citiesObjects, ...selectedAttractions].map((place) => ({
      name: place.name,
      lat: place.lat,
      lon: place.lng || place.lon, // Use lng or lon depending on the object structure
    }));

    // Prepare the payload for the POST request
    const payload = {
      places,
      initial_pop_size: 100,
      start_attractions: startAttractions.map((attr) => attr.name),
      end_attractions: endAttractions.map((attr) => attr.name),
      final_path_size: 5,
      generations: 50,
      initial_mutation_rate: 0.2,
      minimum_mutation_rate: 0.01,
    };

    // Make the POST request to the /generate-route/ endpoint
    fetch("http://localhost:8000/generate-route/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((routeData) => {
        // Replace the names in routeData with the corresponding place objects
        const updatedRoutes = routeData.map((dayRoutes) =>
          dayRoutes.map((route) =>
            route.map((placeName) => {
              const placeObject = places.find((p) => p.name === placeName);
              return placeObject || placeName; // If a place is not found, keep the original name
            }),
          ),
        );
        setRoutes(updatedRoutes); // Update the state with the replaced values
        setMode(2); // Change the mode to 2
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (mode === 2) {
    return <MapPage routePlans={routes} />;
  }

  if (mode === 1) {
    return (
      <Attractions
        attractions={attractions}
        selectedAttractions={selectedAttractions}
        setSelectedAttractions={setSelectedAttractions}
        submitAttractions={submitAttractions}
      />
    );
  }

  return (
    <Cities
      cities={cities}
      setCities={setCities}
      preferences={preferences}
      setPreferences={setPreferences}
      continueFunction={citiesSubmit}
    />
  );
}
