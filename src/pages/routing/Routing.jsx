import React from "react";
import MapboxList from "../../components/map/mapboxList";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";
import Widget from "../../components/widget/Widget";
import './routing.scss'

const Routing = () => {
  return (
    <div className="routing">
      <Navbar label={"Tuyến đường giao hàng"} direct={"/"} />
        <div className="map">
          <MapboxList/>
        </div>
        <div className="content">
            <Widget title="Số lượng đơn hàng" number="5" />
            <Widget title="Tổng quãng đường (km)" number="200" />
            <Widget title="Khối lượng vận chuyển (kg)" number="5" />
        </div>
      <Navigation />
    </div>
  );
};

export default Routing;
