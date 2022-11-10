import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./signin.scss";

const Signin = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
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
