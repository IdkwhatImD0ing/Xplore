// components/MapComponent.js
import {
  DirectionsRenderer,
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, {useEffect, useRef, useState} from "react";

const MapComponent = ({currentDay}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const mapRef = useRef();
  const directionsServiceRef = useRef();

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center =
    currentDay && currentDay.length > 0
      ? { lat: currentDay[0].lat, lng: currentDay[0].lon }
      : { lat: 0, lng: 0 };

  const fetchDirections = () => {
    if (currentDay && currentDay.length > 0) {
      const waypoints = currentDay.slice(1, -1).map((location) => ({
        location: { lat: location.lat, lng: location.lon },
        stopover: true,
      }));

      directionsServiceRef.current.route(
        {
          origin: { lat: currentDay[0].lat, lng: currentDay[0].lon },
          destination: {
            lat: currentDay[currentDay.length - 1].lat,
            lng: currentDay[currentDay.length - 1].lon,
          },
          waypoints: waypoints,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        },
      );
    }
  };

  useEffect(() => {
    if (isLoaded && directionsServiceRef.current) {
      fetchDirections();
    }
  }, [isLoaded, currentDay]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={12}
      onLoad={(map) => {
        mapRef.current = map;
        directionsServiceRef.current = new google.maps.DirectionsService();
      }}
    >
      {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )}
    </GoogleMap>
  );
};

export default MapComponent;
