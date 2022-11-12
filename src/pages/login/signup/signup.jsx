import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    vehicle: "motorcycle",
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeForm = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const register = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/register",
        data
      );
      if (res.status) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Đăng ký không thành công");
    }
  };

  const handleSubmit = () => {
    register(value);
  };
  return (
    <div className="signup">
      <div className="top">
        <div className="image">
          <img src="https://i.imgur.com/qm2AYeG.png" alt="take-away" />
        </div>
        <div className="form-input">
          <TextField
            className="input"
            id="outlined-basic"
            label="Họ tên"
            variant="outlined"
            value={value.name}
            onChange={handleChangeForm("name")}
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="Số điện thoại"
            variant="outlined"
            value={value.phone}
            onChange={handleChangeForm("phone")}
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={value.email}
            onChange={handleChangeForm("email")}
          />
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="radio"
            value={value.vehicle}
            onChange={handleChangeForm("vehicle")}
          >
            <FormControlLabel
              value="motorcycle"
              control={<Radio />}
              label="Xe máy"
            />
            <FormControlLabel
              value="truck"
              control={<Radio />}
              label="Xe tải"
            />
          </RadioGroup>
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
