import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Sorting from "../Common/Sorting";
import { monthList } from "../../utilities/enums";

const initialData = {
  counts: {
    orderedCount: 120,
    deliveringCount: 80,
    deliveredCount: 250,
    cancelledCount: 20,
    orderedAmount: 6000.0,
    deliveringAmount: 4000.0,
    deliveredAmount: 12500.0,
    cancelledAmount: 1000.0,
  },
  series: [
    {
      name: "Ordered Amount",
      data: [500, 600, 700, 800, 900, 1000, 500, 100, 1200, 400, 100, 600],
    },
  ],
};

const PerformanceOverviewChart = () => {
  const { counts, series } = initialData;

  const options = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#eb2f06"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => "",
        },
      },
      marker: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  const [months, setMonths] = useState("");

  const handleChange = (value) => {
    setMonths(value);
  };

  return (
    <div className=' mt-10 text-black dark:text-white bg-white   border-slate-300 dark:border-slate-700 dark:bg-boxdark dark:drop-shadow-none rounded-[10px] bg-white px-7.5 pb-6 pt-7.5  dark:bg-gray-dark dark:shadow-card '>
      <div className='flex items-center justify-end'>
        <div className='flex justify-center items-center gap-2'>
          <Sorting
            name={"Select Month"}
            values={monthList}
            onChange={handleChange}
          />
          <button className='uppercase w-full text-white bg-primary px-6 py-1 rounded font-bold'>
            Export
          </button>
        </div>
      </div>

      <div>
        <div className='-ml-4  -mr-5'>
          <ReactApexChart
            options={options}
            series={series}
            type='area'
            height={310}
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverviewChart;
