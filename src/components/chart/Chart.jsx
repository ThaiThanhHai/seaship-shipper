import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
  const value = {
    labels: ["thất bại", "đang giao", "đã giao"],
    datasets: [
      {
        label: "Đơn hàng",
        data: [data.count_error, data.count_delivering, data.count_finised],
        backgroundColor: ["#FF0033", "#33FFFF", "#33CC99"],
        borderColor: ["#FF0033", "#33FFFF", "#33CC99"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={value} />;
};

export default Chart;
