import React from 'react';
import ChartBar from './ChartBar';
import "./Chart.css"

const Chart = ({items}) => {
    const maximumPrice = 2000;
  const month = [
    {
      label: "Jenuary",
      currentPrice: 0,
    },
    {
      label: "February",
      currentPrice: 0,
    },
    {
      label: "March",
      currentPrice: 0,
    },
    {
      label: "April",
      currentPrice: 0,
    },
    {
      label: "May",
      currentPrice: 0,
    },
    {
      label: "Jun",
      currentPrice: 0,
    },
    {
      label: "Julay",
      currentPrice: 0,
    },
    {
      label: "Augest",
      currentPrice: 0,
    },
    {
      label: "September",
      currentPrice: 0,
    },
    {
      label: "October",
      currentPrice: 0,
    },
    {
      label: "November",
      currentPrice: 0,
    },
    {
      label: "December",
      currentPrice: 0,
    },
  ];


  items.forEach((item) => {
    const mothNumber = new Date(item.date).getMonth();
    month[mothNumber].currentPrice += item.price
  });
    return (
        
    <div className="chart">
    {month.map((item) => {
      return (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrice={item.currentPrice}
          maximumPrice={maximumPrice}
        />
      );
    })}
  </div>
    );
};

export default Chart;