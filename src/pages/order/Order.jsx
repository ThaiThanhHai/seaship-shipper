import ListItem from "@mui/material/ListItem";
// import axios from "axios";
import React from "react";
import Empty from "../../components/empty/Empty";
import CargoItem from "../../components/cargoItem/cargoItem";
import Navbar from "../../components/navbar/navbar";
import Navigation from "../../components/navigation/Navigation";
import "./order.scss";

const Order = () => {
  // const [data, setData] = useState([]);

  // const getStorageValue = (key, defaultValue) => {
  //   // getting stored value
  //   if (typeof window !== "undefined") {
  //     const saved = localStorage.getItem("shipper");
  //     const initial = saved !== null ? JSON.parse(saved) : "";
  //     return initial;
  //   }
  // };
  // const shipper = getStorageValue("shipper", "");
  // const getDeliveries = async (id) => {
  //   try {
  //     const result = await axios.get(
  //       `http://localhost:3000/api/v1/deliveries/shipper/${id}`
  //     );
  //     if (result.data) {
  //       setData(result.data?.data);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getDeliveries(shipper.id);
  // }, [shipper.id]);

  const test = [
    {
      id: 1,
      code: "001",
      address: "22 Nguyễn Việt Hồng, An Phú, Ninh Kiều, Cần Thơ"
    },
    {
      id: 2,
      code: "002",
      address: "158 hẻm liên tổ 12-20, Nguyễn Văn Cừ, An Khánh, Ninh Kiều, Cần Thơ"
    },
    {
      id: 3,
      code: "002",
      address: "158 hẻm liên tổ 12-20, Nguyễn Văn Cừ, An Khánh, Ninh Kiều, Cần Thơ"
    },
    {
      id: 4,
      code: "002",
      address: "158 hẻm liên tổ 12-20, Nguyễn Văn Cừ, An Khánh, Ninh Kiều, Cần Thơ"
    }
  ]
  return (
    <div className="order">
      <Navbar label={"Đơn hàng hôm nay"} direct={"/"} />
      <ListItem>
        <div className="list-order">
          {!test.length ? (
            <Empty />
          ) : (
            test.map((item, index) => {
              if (index+1 === test.length) {
                return <CargoItem data={item} key={index} stt={index} last={false}/>;
              }
              return <CargoItem data={item} key={index} stt={index} last={true}/>;
            })
          )}
        </div>
      </ListItem>
      <Navigation />
    </div>
  );
};

export default Order;
