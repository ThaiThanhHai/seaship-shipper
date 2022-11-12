import React from "react";
import "./empty.scss";

const Empty = () => {
  return (
    <>
      <img
        src="https://i.imgur.com/7JCiMzQ.png"
        alt="empty"
        className="empty"
      />
      <p>Đơn hàng hôm nay trống</p>
    </>
  );
};

export default Empty;
