import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./detail.scss";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Mapbox from "../../components/map/mapbox";
import Navigation from "../../components/navigation/Navigation";
import TabContent from "../../components/tabContent/tabContent";
import ModalFail from "../../components/modal/modalFail";
import ModalSuccess from "../../components/modal/modalSuccess";

const Detail = () => {
  const params = useParams();
  const getStorageValue = (key, defaultValue) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shipper");
      const initial = saved !== null ? JSON.parse(saved) : "";
      return initial;
    }
  };
  const initialValue = getStorageValue("shipper", "");
  const [data, setData] = useState({});
  const [openModalFail, setOpenModalFail] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [currentLocate, setCurrentLocate] = useState(null);

  const address = [currentLocate, data.coordinate];

  const [coordinates, setCoordinates] = useState([[105.787629, 10.036513]]);
  const [waypoints, setWaypoints] = useState([]);
  const [steps, setSteps] = useState([]);

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
        `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${coordinates}?alternatives=false&geometries=geojson&language=vn&overview=simplified&steps=true&access_token=pk.eyJ1IjoidGhhaXRoYW5oaGFpIiwiYSI6ImNsOGVwZ2s0bjBpdWQzdnA5c3U5NmVoM3IifQ.h7reW0CjFKe-waithRjc0g`
      );
      setWaypoints(result.data.waypoints);
      setSteps(result.data.routes[0].legs[0].steps);
      setCoordinates(result.data.routes[0].geometry.coordinates);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDirections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  navigator.geolocation.getCurrentPosition((position) => {
    setCurrentLocate({
      lng: position.coords.longitude,
      lat: position.coords.latitude,
    });
  });

  const getOrderDetail = async (shipper_id, order_id) => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/v1/shippers/${shipper_id}/order/${order_id}`
      );
      if (result.data) {
        setData(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrderDetail(initialValue.id, params.id);
  }, [initialValue.id, params.id]);



  const handleSubmitFinish = () => {
    setOpenModalSuccess(true);
  };

  return (
    <div className="order-detail">
      <Navbar label={"Chi tiết đơn hàng"} direct={"/order"} />
      <div className="detail">
        <div className="map">
          <Mapbox coordinates={coordinates} waypoints={waypoints} />
        </div>
        <div className="top">
          <TabContent data={data && data} steps={steps} />
        </div>
        <div className="bottom">
          <Button
            variant="contained"
            sx={{
              width: 130,
              color: "white",
              background: "red",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "red",
              },
            }}
            onClick={() => {
              setOpenModalFail(true);
            }}
          >
            Thất bại
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 130,
              color: "white",
              background: "green",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "green",
              },
            }}
            onClick={handleSubmitFinish}
          >
            Thành công
          </Button>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 1000,
          }}
        />
      </div>
      {openModalFail && (
        <ModalFail open={openModalFail} setOpen={setOpenModalFail} id={params.id} />
      )}
      {openModalSuccess && (
        <ModalSuccess
          open={openModalSuccess}
          setOpen={setOpenModalSuccess}
          id={params.id}
        />
      )}

      <Navigation />
    </div>
  );
};

export default Detail;
