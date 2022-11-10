import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <div className="signup">
      <div className="top">
        <div className="image">
          <img src="https://i.imgur.com/qm2AYeG.png" alt="take-away" />
        </div>
        <div>
          <TextField
            className="input"
            id="outlined-basic"
            label="Họ tên"
            variant="outlined"
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="Số điện thoại"
            variant="outlined"
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="Email"
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
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default Signup;
