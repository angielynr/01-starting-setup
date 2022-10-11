import React from "react";
import "./ChartBar.css";

const ChartBar = (data) => {
  let barFilledHeight = "0%";

  if (data.maxValue > 0) {
    barFilledHeight = Math.round((data.value / data.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFilledHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{data.label}</div>
    </div>
  );
};

export default ChartBar;
