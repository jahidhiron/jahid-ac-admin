import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartThree = () => {
  const [state, setState] = React.useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 480,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="text-black dark:text-white bg-white drop-shadow-1 border-l border-slate-300 dark:border-slate-700 dark:bg-boxdark dark:drop-shadow-none rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={480}
        />
      </div>
    </div>
  );
};

export default ChartThree;
