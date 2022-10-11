import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (data) => {
  const dataPointsValue = data.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {data.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
