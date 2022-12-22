import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalLogout from "../modal/modalLogout";
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

  const handleLogout = () => {
    setOpen(true);
  };
  const [isLogout, setIsLogout] = useState(false);

  const [open, setOpen] = useState(false);

  if (isLogout) {
    navigate("/");
    localStorage.setItem("shipper", JSON.stringify(""));
  }
  return (
    <div className="navbar">
      <ArrowBack className="arrow" onClick={handleLogout}></ArrowBack>
      <div className="label">{label}</div>
      <img src={initialValue.avatar} alt="avatar" />
      {open && (
        <ModalLogout open={open} setOpen={setOpen} setIsLogout={setIsLogout} />
      )}
    </div>
  );
};

export default Navbar;
