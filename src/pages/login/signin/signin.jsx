import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./signin.scss";

const Signin = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  const handleChange = (event) => {
    setValue({ phone: event.target.value });
  };
  const login = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/login", data);
      if (res) {
        localStorage.setItem("shipper", JSON.stringify(res.data));
        navigate(`/route`);
      }
    } catch (error) {
      toast.error("Số điện thoại chưa được đăng ký");
      console.error(error);
    }
  };

  const handleSubmit = () => {
    login(value);
  };

  return (
    <div className="signin">
      <div className="top">
        <div className="image">
          <img src="https://i.imgur.com/fzm4sad.png" alt="take-away" />
        </div>
        <div>
          <TextField
            className="phone"
            id="outlined-basic"
            label="Số điện thoại"
            variant="outlined"
            onChange={handleChange}
          />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 1000,
            }}
          />
        </div>
      </div>
      <div className="bottom">
        <Button
          variant="contained"
          className="btn-login"
          onClick={handleSubmit}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default Signin;
