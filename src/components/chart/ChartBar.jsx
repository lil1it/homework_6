import React from 'react';
import "./ChartBar.css"

const ChartBar = ({ maximumPrice, currentPrice, label }) => {
    const fillHeigt = (100 * currentPrice) / maximumPrice;
    return (
        <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: `${fillHeigt}%` }}
        ></div>
      </div>
      <p className="chart-bar__label">{label}</p>
    </div>
    );
};

export default ChartBar;