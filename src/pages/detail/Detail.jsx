import { Button } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./detail.scss";
import GoogleMapAPI from "../../components/map/googleMapAPI";

const Detail = () => {
  return (
    <div className="order-detail">
      <Navbar label={"Chi tiết đơn hàng"} />
      <div className="detail">
        <div className="top">
          <div className="order-name">Áo thun nam</div>
          <div className="label">
            <p className="left">Phí ship</p>
            <p className="right">30000 VNĐ</p>
          </div>
          <div className="label">
            <p className="left">Khooảng cách</p>
            <p className="right">33,3 km</p>
          </div>
          <div className="label">
            <p className="left">Dịch vụ</p>
            <p className="right">Giao hàng tiết kiệm</p>
          </div>
          <div className="address">
            <p className="title">Địa chỉ</p>
            <p className="name">
              22 Nguyễn Việt Hồng, An Khánh, Ninh Kiều, Cần Thơ
            </p>
          </div>
        </div>
        <div className="map">
          <GoogleMapAPI />
        </div>
        <div className="bottom">
          <Button
            variant="contained"
            sx={{ width: 150, color: "white", background: "red" }}
          >
            Thất bại
          </Button>
          <Button
            variant="contained"
            sx={{ width: 150, color: "white", background: "green" }}
          >
            Thành công
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
