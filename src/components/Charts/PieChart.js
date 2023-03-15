import React from "react";
import { Chart } from "react-google-charts";

function PieChart(props) {
  const options = {
    title: "Annual Expenses",
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      data={props.data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default PieChart;
