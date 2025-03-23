import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Sorting from "../Common/Sorting";
import { monthList } from "../../utilities/enums";

const options = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

const PerformanceEngagementChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Minutes",
        data: [
          130, 203, 220, 856, 133, 247, 155, 312, 400, 512, 620, 710, 805, 920,
          1033, 1147, 1255, 1321, 1400, 1550, 1625, 1740, 1830, 1900, 2005,
          2130, 2250, 2355, 2480, 2599,
        ],
      },
    ],
  });

  const [months, setMonths] = useState("");

  const handleChange = (value) => {
    setMonths(value);
  };

  return (
    <div className='w-full text-black dark:text-white bg-white  border-slate-300 dark:border-slate-700 dark:bg-boxdark dark:drop-shadow-none rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 s dark:bg-gray-dark dark:shadow-card xl:col-span-7'>
      <div className='flex mb-7 flex-wrap justify-between bg-white mx-auto'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-xl font-semibold text-gray-800'>
            520,597 <span className='font-normal'>minutes taught</span>
          </h2>
          <p className='text-sm text-gray-600'>
            of lectures students have collectively viewed over the specified
            time period.
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='text-xl font-semibold text-gray-800'>
            6,369 <span className='font-normal'>active learners</span>
          </h2>
          <p className='text-sm text-gray-600'>
            who’ve started a lecture over the selected time period.
          </p>
        </div>
      </div>
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
        <div id='chartTwo' className='-ml-5 -mb-9'>
          <ReactApexChart
            options={options}
            series={state.series}
            type='bar'
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceEngagementChart;
