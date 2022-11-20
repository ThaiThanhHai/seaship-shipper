import React from "react";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";

const History = () => {
  return (
    <div className="history">
      <Navbar label={"Lịch sử đơn hàng"} direct={"/"} />
      <div className="map">history</div>
      <Navigation />
    </div>
  );
};

export default History;
