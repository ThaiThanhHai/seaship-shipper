import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import {
  getProvinces,
  getDistricts,
  getDistrictsByProvinceCode,
  getWardsByDistrictCode,
} from "sub-vn";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "./googleMapAPI.scss";
import toast, { Toaster } from "react-hot-toast";
import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";

const center = { lat: 10.02977, lng: 105.7704766 };

const GoogleMapAPI = (props) => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBNTXiG9T_XH1bAKdkCFRna61AJAK0Bn-I",
    libraries: libraries,
  });
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const originRef =
    "Can Tho University, Đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam";

  if (!isLoaded) {
    return (
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
    );
  }

  const calculateRoute = async () => {
    const destiantion = `${values.village} ${values.ward} ${values.district} ${values.province}`;

    if (destiantion === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef,
      destination: destiantion,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    const address = destiantion;
    let fee;
    if (values.province === "Thành phố Cần Thơ") {
      if (weight < 3) {
        fee = deliveryType.price_inner;
      } else {
        fee = (weight - 3) * deliveryType.overpriced + deliveryType.price_inner;
      }
    } else {
      if (weight < 3) {
        fee = deliveryType.price_outer;
      } else {
        fee = (weight - 3) * deliveryType.overpriced + deliveryType.price_outer;
      }
    }
    const longitude = results.routes[0].legs[0].end_location.lng();
    const latitude = results.routes[0].legs[0].end_location.lat();

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setTranporstFee(fee);
    setDuration(results.routes[0].legs[0].duration.text);
    setAddress(address);
    setFee(fee);
    setLongitude(longitude);
    setLatitude(latitude);
  };

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
