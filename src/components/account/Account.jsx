import React from "react";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";

const Account = () => {
  return (
    <div className="account">
      <Navbar label={"Thông tin tài khoản"} direct={"/"} />
      <div className="map">account</div>
      <Navigation />
    </div>
  );
};

export default Account;
