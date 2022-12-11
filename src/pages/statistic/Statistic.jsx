import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/navbar'
import Navigation from '../../components/navigation/Navigation'
import './statistic.scss'

const Statistic = () => {
  const getStorageValue = (key, defaultValue) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shipper");
      const initial = saved !== null ? JSON.parse(saved) : "";
      return initial;
    }
  };
  const shipper = getStorageValue("shipper", "");
  const [data, setData] = useState({});
  const getStatistic = async (shipper_id) => {
    try {
      const result = await axios.get(
        ` http://localhost:3000/api/v1/shippers/${shipper_id}/statistic`
      );
      if (result.data) {
        setData(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getStatistic(shipper.id);
  }, [shipper.id]);

  console.log(data)
  return (
    <div className="statistic">
      <Navbar label={"Thống kê"} direct={"/"} />
      {data.total_order !== 0 ? (<div className="content">
        <div className="chart">
          <Chart data={data && data}/>
        </div>
        <div className="stats">
          <div className="item">
            <div className="label">Số lượng vận đơn</div>
            <div className="count">{data.total_order}</div>
          </div>
          <div className="item">
            <div className="label">Khối lượng vận chuyển(kg)</div>
            <div className="count">{data.total_dimension}</div>
          </div>
          <div className="item">
            <div className="label">Quãng đường vận chuyển (km)</div>
            <div className="count">{data.total_distance}</div>
          </div>
          <div className="item">
            <div className="label">Tổng phí vận chuyển(VNĐ)</div>
            <div className="count">{data.total_fee}</div>
          </div>
        </div>
      </div>) : <div className='empty'>
          <img src="https://i.imgur.com/O1AHsvh.png" alt="empty"/>
          <span>Hiện tại không có thống kê</span>
        </div>}
      <Navigation />
    </div>
  )
}

export default Statistic
