import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ label }) => {
  const navigate = useNavigate();

  const getStorageValue = (key, defaultValue) => {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shipper");
      const initial = saved !== null ? JSON.parse(saved) : "";
      return initial;
    }
  };
  const initialValue = getStorageValue("shipper", "");

  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    localStorage.setItem("shipper", JSON.stringify(""));
    navigate("/");
  };
  return (
    <div className="navbar">
      <ArrowBack
        className="arrow"
        onClick={() => {
          navigate(-1);
        }}
      ></ArrowBack>
      <div className="label">{label}</div>
      <img
        src={initialValue.avatar}
        alt="avatar"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      {toggle && (
        <div className="sub-element">
          <p onClick={handleLogout}>Đăng xuất</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
