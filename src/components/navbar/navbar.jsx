import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ label, direct }) => {
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

  return (
    <div className="navbar">
      <ArrowBack
        className="arrow"
        onClick={() => {
          navigate(direct);
        }}
      ></ArrowBack>
      <div className="label">{label}</div>
      <img
        src={initialValue.avatar}
        alt="avatar"
        onClick={() => {
          navigate("/account");
        }}
      />
    </div>
  );
};

export default Navbar;
