import "./Chart.css";
import ChartBar from "./ChartBar";
import React from "react";

function Chart(props) {
  // const dataPointValues = props.dataPoints.map(
  //   (dataPoint, ind) => dataPoint.value
  // );
  // const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={5000}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
