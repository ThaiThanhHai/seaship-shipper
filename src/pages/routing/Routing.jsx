import axios from "axios";
import { round } from "lodash";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MapboxList from "../../components/map/mapboxList";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";
import Widget from "../../components/widget/Widget";
import "./routing.scss";

const Routing = () => {
  const [value, setValue] = useState({});
  const getStorageValue = (key, defaultValue) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shipper");
      const initial = saved !== null ? JSON.parse(saved) : "";
      return initial;
    }
  };
  const initialValue = getStorageValue("shipper", "");

  const navigate = useNavigate();

  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("shipper"));
    if (isAuth && isAuth !== null) {
      navigate("/route");
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRoutingData = async (id) => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/v1/shippers/${id}/routing`
      );
      if (result) {
        setValue(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoutingData(initialValue.id);
  }, [initialValue.id]);

  return (
    <div className="routing">
      <Navbar label={"Tuyến đường giao hàng"} direct={"/"} />
      <div className="map">
        <MapboxList address={value && value.coordinates} />
      </div>
      <div className="content">
        <Widget
          title="Số lượng đơn hàng"
          number={value && value.total_order ? value.total_order : 0}
        />
        <Widget
          title="Tổng quãng đường (km)"
          number={value && value.total_distance ? value.total_distance : 0}
        />
        <Widget
          title="Khối lượng vận chuyển (kg)"
          number={
            value && value.total_weight ? round(value.total_weight, 2) : 0
          }
        />
      </div>
      <Navigation />
    </div>
  );
};

export default Routing;
