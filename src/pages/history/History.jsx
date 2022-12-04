import React from "react";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";
import "./history.scss";

const History = () => {
  return (
    <div className="history">
      <Navbar label={"Lịch sử đơn hàng"} direct={"/"} />
      <div className="content">
        <div className="card">
          <div className="top">
            <div className="name">Áo thun nam</div>
            <div className="date">04/12/2022</div>
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
            <div className="price">20000 VNĐ</div>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <div className="name">Bàn phím cơ</div>
            <div className="date">04/12/2022</div>
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
            <div className="price">20000 VNĐ</div>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <div className="name">Áo thun nam</div>
            <div className="date">04/12/2022</div>
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
            <div className="price">20000 VNĐ</div>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <div className="name">Áo thun nam</div>
            <div className="date">04/12/2022</div>
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
            <div className="price">20000 VNĐ</div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default History;
