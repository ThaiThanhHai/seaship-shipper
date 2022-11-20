import Skeleton from "@mui/material/Skeleton";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState } from "react";
import "./googleMapAPI.scss";

const center = { lat: 10.02977, lng: 105.7704766 };

const GoogleMapAPI = ({ destiantion }) => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  }); // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const originRef =
    "Can Tho University, Đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam";

  if (!isLoaded) {
    return (
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
    );
  }

  async function calculateRoute() {
    const destiantionRef = destiantion;

    if (destiantionRef === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef,
      destination: destiantionRef,

      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
  }

  calculateRoute();

  return (
    <div className="mapContainer">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapAPI;
