import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./detail.scss";
import GoogleMapAPI from "../../components/map/googleMapAPI";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

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

  const handleSubmitError = () => {
    handleUpdateStatus(params.id, { status: "error" });
  };
  const handleSubmitFinish = () => {
    handleUpdateStatus(params.id, { status: "finished" });
  };
  return (
    <div className="order-detail">
      <Navbar label={"Chi tiết đơn hàng"} direct={"/order"} />
      <div className="detail">
        <div className="top">
          <div className="order-name">{data && data.name}</div>
          <div className="label">
            <p className="left">Phí ship</p>
            <p className="right">{data && data.shipping_fee} VNĐ</p>
          </div>
          <div className="label">
            <p className="left">Khooảng cách</p>
            <p className="right">{data && data.distance / 1000} km</p>
          </div>
          <div className="label">
            <p className="left">Dịch vụ</p>
            <p className="right">{data && data.delivery_type}</p>
          </div>
          <div className="address">
            <p className="title">Địa chỉ</p>
            <p className="name">{data && data.address}</p>
          </div>
        </div>
        <div className="map">
          <GoogleMapAPI destiantion={data && data.address} />
        </div>
        <div className="bottom">
          <Button
            variant="contained"
            sx={{ width: 150, color: "white", background: "red" }}
            onClick={handleSubmitError}
          >
            Thất bại
          </Button>
          <Button
            variant="contained"
            sx={{ width: 150, color: "white", background: "green" }}
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
    </div>
  );
};

export default Detail;
