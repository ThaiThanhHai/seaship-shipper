import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/navbar'
import Navigation from '../../components/navigation/Navigation'
import './statistic.scss'

const Statistic = () => {
  return (
    <div className="statistic">
      <Navbar label={"Thống kê"} direct={"/"} />
      <div className="content">
        <div className="chart">
          <Chart/>
        </div>
        <div className="stats">
          <div className="item">
            <div className="label">Số lượng vận đơn</div>
            <div className="count">10</div>
          </div>
          <div className="item">
            <div className="label">Khối lượng vận chuyển(kg)</div>
            <div className="count">50</div>
          </div>
          <div className="item">
            <div className="label">Quãng đường vận chuyển (km)</div>
            <div className="count">100</div>
          </div>
          <div className="item">
            <div className="label">Tổng phí vận chuyển(VNĐ)</div>
            <div className="count">50000</div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  )
}

export default Statistic
