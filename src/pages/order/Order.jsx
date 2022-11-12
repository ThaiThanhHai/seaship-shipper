import { List } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Empty from "../../components/empty/Empty";
import Item from "../../components/item/Item";
import Navbar from "../../components/navbar/navbar";
import "./order.scss";

const Order = () => {
  const [data, setData] = useState([]);

  const getStorageValue = (key, defaultValue) => {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shipper");
      const initial = saved !== null ? JSON.parse(saved) : "";
      return initial;
    }
  };
  const shipper = getStorageValue("shipper", "");
  const getDeliveries = async (id) => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/v1/deliveries/shipper/${id}`
      );
      if (result.data) {
        setData(result.data?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDeliveries(shipper.id);
  }, [shipper.id]);
  return (
    <div className="order">
      <Navbar label={"Đơn hàng hôm nay"} />
      <List>
        <div className="list-order">
          {!data.length ? (
            <Empty />
          ) : (
            data.map((item) => {
              return <Item data={item} key={item.id} />;
            })
          )}
        </div>
      </List>
    </div>
  );
};

export default Order;
