import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";
import "./history.scss";

const History = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("shipper"));
    if (isAuth && isAuth !== null) {
      navigate("/history");
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getStorageValue = (key, defaultValue) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shipper");
      const initial = saved !== null ? JSON.parse(saved) : "";
      return initial;
    }
  };
  const shipper = getStorageValue("shipper", "");
  const [data, setData] = useState([]);
  const getHistoryOrder = async (shipper_id) => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/v1/shippers/${shipper_id}/history`
      );
      if (result.data) {
        setData(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getHistoryOrder(shipper.id);
  }, [shipper.id]);

  return (
    <div className="history">
      <Navbar label={"Lịch sử đơn hàng"} direct={"/"} />
      <div className="content">
        {data.length ? (
          data.map((value, index) => {
            if (value.status === "finished") {
              return (
                <div className="card" key={index}>
                  <div className="top">
                    <div className="name">{value.name}</div>
                    <div className="date">{value.time}</div>
                  </div>
                  <div className="center">
                    <div
                      className="status"
                      style={{
                        border: "1px solid green",
                        background: "#007041",
                        color: "#fff",
                      }}
                    >
                      Đã giao
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="label">Phí vận chuyển</div>
                    <div className="price">{value.fee} VNĐ</div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="card" key={index}>
                  <div className="top">
                    <div className="name">{value.name}</div>
                    <div className="date">{value.time}</div>
                  </div>
                  <div className="center">
                    <div
                      className="status"
                      style={{
                        border: "1px solid red",
                        background: "#F00",
                        color: "#fff",
                      }}
                    >
                      Thất bại
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="label">Phí vận chuyển</div>
                    <div className="price">{value.fee} VNĐ</div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div className="empty">
            <img src="https://i.imgur.com/pGN7Cgk.png" alt="" />
            <span>Lịch sử đơn hàng trống</span>
          </div>
        )}
      </div>
      <Navigation />
    </div>
  );
};

export default History;
