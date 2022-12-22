/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  Source,
  Layer,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import { useEffect } from "react";

const MapboxList = ({ address }) => {
  const [coordinates, setCoordinates] = useState([[105.787629, 10.036513]]);
  const [waypoints, setWaypoints] = useState([]);

  const pasreEncodeURI = (address) => {
    const newAddress = address.map((data) => {
      return `${data.lng}%2C${data.lat}`;
    });
    return newAddress.join("%3B");
  };

  const getDirections = async () => {
    try {
      const coordinates = pasreEncodeURI(address);
      const result = await axios.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${coordinates}?alternatives=false&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoidGhhaXRoYW5oaGFpIiwiYSI6ImNsOGVwZ2s0bjBpdWQzdnA5c3U5NmVoM3IifQ.h7reW0CjFKe-waithRjc0g`
      );
      setWaypoints(result.data.waypoints);
      setCoordinates(result.data.routes[0].geometry.coordinates);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDirections();
  }, [address]);

  console.log(address);
  const dataOne = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: coordinates,
    },
  };
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoidGhhaXRoYW5oaGFpIiwiYSI6ImNsOGVwZ2s0bjBpdWQzdnA5c3U5NmVoM3IifQ.h7reW0CjFKe-waithRjc0g"
      initialViewState={{
        longitude: coordinates[0][0],
        latitude: coordinates[0][1],
        zoom: 10,
      }}
      style={{ width: "400px", height: "500px" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {/* {waypoints &&
        waypoints.map((waypoint, index) => {
          return (
            <Marker
              key={index}
              longitude={waypoint.location[0]}
              latitude={waypoint.location[1]}
              color="red"
            >
              <div className="marker">
                <span>{index}</span>
              </div>
            </Marker>
          );
        })} */}
      {address &&
        address.map((data, index) => {
          if (index !== address.length - 1) {
            return (
              <Marker
                key={index}
                longitude={data.lng}
                latitude={data.lat}
                color="red"
              >
                <div className="marker">
                  <span>{index + 1}</span>
                </div>
              </Marker>
            );
          }
        })}
      <NavigationControl position="bottom-right" />
      <GeolocateControl />
      <Source id="polylineLayer" type="geojson" data={dataOne}>
        <Layer
          id="lineLayer"
          type="line"
          source="my-data"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "#007041",
            "line-width": 5,
          }}
        />
      </Source>
    </Map>
  );
};

export default MapboxList;
