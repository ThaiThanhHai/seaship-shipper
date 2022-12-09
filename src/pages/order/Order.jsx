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

const Order = () => {
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

  console.log(data)

  return (
    <div className="order">
      <Navbar label={"Đơn hàng hôm nay"} direct={"/"} />
      <ListItem>
        <div className="list-order">
          {!data.length ? (
            <Empty />
          ) : (
            data.map((item, index) => {
              if (index+1 === data.length) {
                return <CargoItem data={item} key={index} stt={index} last={false}/>;
              }
              return <CargoItem data={item} key={index} stt={index} last={true}/>;
            })
          )}
        </div>
      </ListItem>
      <Navigation />
    </div>
  );
};

export default Order;
