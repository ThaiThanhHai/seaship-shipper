import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login/signin");
  };

  const handleSignUp = () => {
    navigate("/login/signup");
  };
  return (
    <div className="login">
      <div className="top">
        <div className="image">
          <img src="https://i.imgur.com/9Wr3teC.png" alt="take-away" />
        </div>
        <div className="title">
          <p>Dịch vụ đa dạng đáp ứng mọi yêu cầu của bạn</p>
        </div>
      </div>
      <div className="bottom">
        <Button
          variant="contained"
          className="btn-login"
          onClick={handleSignIn}
        >
          Đăng nhập
        </Button>
        <Button
          variant="contained"
          className="btn-logout"
          onClick={handleSignUp}
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default Login;
