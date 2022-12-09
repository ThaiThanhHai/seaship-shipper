import { RemoveRedEyeOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./cargoItem.scss";

const CargoItem = ({ data, stt, last }) => {
  return (
    <div className="cargoItem">
      <div className="index">
        <p className="span">{stt + 1}</p>
        <div className="crossbar"></div>
        {last ? <div className="horizon"></div> : undefined}
      </div>
      <div className="info">
        <div className="code">{data.name}</div>
        <div className="address">{data.address}</div>
        <Link to={`/order/${data.id}`} style={{ textDecoration: "none" }}>
          <div className="btn-view" variant="outlined">
            <RemoveRedEyeOutlined fontSize="medium" sx={{ color: "#007041" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CargoItem;
