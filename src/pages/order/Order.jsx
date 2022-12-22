import ListItem from "@mui/material/ListItem";
// import axios from "axios";
import React, { useState } from "react";
import Empty from "../../components/empty/Empty";
import CargoItem from "../../components/cargoItem/cargoItem";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";
import "./order.scss";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("shipper"));
    if (isAuth && isAuth !== null) {
      navigate("/order");
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [data, setData] = useState([]);
  const getStorageValue = (key, defaultValue) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shipper");
      const initial = saved !== null ? JSON.parse(saved) : "";
      return initial;
    }
  };
  const initialValue = getStorageValue("shipper", "");
  const getListOrder = async (id) => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/v1/shippers/${id}/order`
      );
      if (result.data) {
        setData(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListOrder(initialValue.id);
  }, [initialValue.id]);

  return (
    <div className="order">
      <Navbar label={"Đơn hàng hôm nay"} direct={"/"} />
      <ListItem>
        <div className="list-order">
          {!data.length ? (
            <Empty />
          ) : (
            data.map((item, index) => {
              if (index + 1 === data.length) {
                return (
                  <CargoItem data={item} key={index} stt={index} last={false} />
                );
              }
              return (
                <CargoItem data={item} key={index} stt={index} last={true} />
              );
            })
          )}
        </div>
      </ListItem>
      <Navigation />
    </div>
  );
};

export default Order;
