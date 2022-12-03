/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Map, {Marker, NavigationControl, GeolocateControl, Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = (props) => {
  const { coordinates, waypoints } = props;


  const dataOne = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: coordinates
    }
  };

  return <>
    <Map
    mapboxAccessToken="pk.eyJ1IjoidGhhaXRoYW5oaGFpIiwiYSI6ImNsOGVwZ2s0bjBpdWQzdnA5c3U5NmVoM3IifQ.h7reW0CjFKe-waithRjc0g"
    initialViewState={{
      longitude: coordinates[0][0],
      latitude: coordinates[0][1],
      zoom: 7,
    }}
    style={{width: '400px', height: '300px'}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    {waypoints && waypoints.map((waypoint, index) => {
      return (<Marker
        key={index}
        longitude={waypoint.location[0]}
        latitude={waypoint.location[1]}
        color="red"
      />)
    })}
    <NavigationControl position='bottom-right'/>
    <GeolocateControl/>
    <Source id="polylineLayer" type="geojson" data={dataOne}>
      <Layer
        id="lineLayer"
        type="line"
        source="my-data"
        layout={{
          "line-join": "round",
          "line-cap": "round"
        }}
        paint={{
          "line-color": "#007041",
          "line-width": 5
        }}
      />
    </Source>
  </Map>
  </>;
}

export default Mapbox;
