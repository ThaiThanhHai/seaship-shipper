import React from "react";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";

const Routing = () => {
  return (
    <div className="routing">
      <Navbar label={"Tuyến đường giao hàng"} direct={"/"} />
      <div className="map">map</div>
      <Navigation />
    </div>
  );
};

export default Routing;
