import React from "react";
// import "./PieChart.css";
import { Chart } from "react-google-charts";

function PieChart(props) {
  const options = {
    title: "Annual Expenses",
    is3D: true,
    backgroundColor: "#4b4b4b",
    // colors: ["white"],
    // fontColor: "white",
    titleTextStyle: { color: "white" },
    legend: { textStyle: { color: "white" } },
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
