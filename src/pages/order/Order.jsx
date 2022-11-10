import React from "react";
import Item from "../../components/item/Item";
import Navbar from "../../components/navbar/navbar";
import "./order.scss";

const orders = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    address:
      "158 Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ",
    shipping_fee: 25000,
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    address:
      "158 Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ",
    shipping_fee: 25000,
  },
  {
    id: 3,
    name: "Nguyễn Văn A",
    address:
      "158 Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ",
    shipping_fee: 25000,
  },
  {
    id: 4,
    name: "Nguyễn Văn A",
    address:
      "158 Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ",
    shipping_fee: 25000,
  },
  {
    name: "Nguyễn Văn A",
    address:
      "158 Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ",
  },
];

const Order = () => {
  return (
    <div className="order">
      <Navbar label={"Đơn hàng hôm nay"} />
      <div className="list-order">
        {orders.length &&
          orders.map((data) => {
            return <Item data={data} />;
          })}
      </div>
    </div>
  );
};

export default Order;
