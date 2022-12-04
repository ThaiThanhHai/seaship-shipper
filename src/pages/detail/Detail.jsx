import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./detail.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import Mapbox from "../../components/map/mapbox";
import Navigation from "../../components/navigation/Navigation";
import TabContent from "../../components/tabContent/tabContent";
import ModalFailure from "../../components/modal/modal";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  const address = [
    { lng: 105.7875219, lat: 10.0364216 },
    { lng: 106.339785, lat: 9.935583 },
  ];
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
  }, []);

  const getOrderDetail = async (id) => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/v1/deliveries/order/${id}`
      );
      if (result.data) {
        setData(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrderDetail(params.id);
  }, [params.id]);

  const handleUpdateStatus = async (id, status) => {
    try {
      const result = await axios.put(
        `http://localhost:3000/api/v1/deliveries/order/${id}`,
        status
      );
      if (result.data) {
        toast.success("Cập nhật đơn hàng thành công");
        navigate("/order");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra vui lòng thử lại");
      console.error(error);
    }
  };

  const handleSubmitFinish = () => {
    handleUpdateStatus(params.id, { status: "finished" });
  };
  return (
    <div className="order-detail">
      <Navbar label={"Chi tiết đơn hàng"} direct={"/order"} />
      <div className="detail">
        <div className="map">
          <Mapbox coordinates={coordinates} waypoints={waypoints} />
        </div>
        <div className="top">
          <TabContent data={data} steps={steps} />
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
            onClick={() => { setOpen(true)}}
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
      {open && <ModalFailure open={open} setOpen={setOpen}/>}
      <Navigation />
    </div>
  );
};

export default Detail;
