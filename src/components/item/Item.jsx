import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./item.scss";

const Item = ({ data }) => {
  return (
    <div className="item">
      <div className="left">
        <img src="https://i.imgur.com/YR0K4Ay.png" alt="box" />
      </div>
      <div className="right">
        <div className="name">{data.name}</div>
        <div className="address">{data.address}</div>
        <Link to={`/order/${data.id}`} style={{ textDecoration: "none" }}>
          <Button className="btn-view" variant="outlined">
            Xem
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
