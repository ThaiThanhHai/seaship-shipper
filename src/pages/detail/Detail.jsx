import { Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./detail.scss";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
const center = { lat: 10.02977, lng: 105.7704766 };
const originRef = {};
const destination = {};
const Detail = () => {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const handleLoad = async () => {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef,
      destination: destination,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
  };
  handleLoad();
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
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
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
