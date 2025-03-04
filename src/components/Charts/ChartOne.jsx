
import React from "react";
import ReactApexChart from "react-apexcharts";

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
    {
      name: "Delivering Amount",
      data: [700, 750, 80, 850, 90, 950, 400, 450, 500, 550, 600, 650],
    },
    {
      name: "Delivered Amount",
      data: [1100, 100, 1200, 200, 400, 100, 600, 100, 800, 100, 500, 200],
    },
    {
      name: "Cancelled Amount",
      data: [100, 10, 20, 50, 300, 30, 40, 400, 80, 55, 60, 200],
    },
  ],
};

const ChartOne = () => {
  const { counts, series } = initialData;

  const options = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#38ada9", "#e1b12c", "#44bd32", "#eb2f06"],
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

  return (
    <div className="col-span-12 mt-10 text-black dark:text-white bg-white drop-shadow-1 border-l border-slate-300 dark:border-slate-700 dark:bg-boxdark dark:drop-shadow-none rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="flex items-center justify-between">
        <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
              Order Overview
            </h4>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-[#38ada9]"> </div>
            <p className="text-sm">Ordered</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-[#e1b12c]"> </div>
            <p className="text-sm">Delivering</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-[#44bd32]"> </div>
            <p className="text-sm">Delivered</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-[#eb2f06]"> </div>
            <p className="text-sm">Cancelled</p>
          </div>
        </div>
      </div>

      <div>
        <div className="-ml-4 -mr-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={310}
          />
        </div>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="border-[#F7F9FC] text-left dark:bg-dark-2">
            <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
              Label
            </th>
            <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
              Count
            </th>
            <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="font-bold text-[#38ada9]">Ordered</p>
            </td>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="text-dark dark:text-white">{counts.orderedCount}</p>
            </td>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="text-dark dark:text-white">
                ${counts.orderedAmount.toFixed(2)}
              </p>
            </td>
          </tr>
          <tr>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="font-bold text-[#e1b12c]">Delivering</p>
            </td>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="text-dark dark:text-white">
                {counts.deliveringCount}
              </p>
            </td>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="text-dark dark:text-white">
                ${counts.deliveringAmount.toFixed(2)}
              </p>
            </td>
          </tr>
          <tr>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="font-bold text-[#44bd32]">Delivered</p>
            </td>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="text-dark dark:text-white">
                {counts.deliveredCount}
              </p>
            </td>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="text-dark dark:text-white">
                ${counts.deliveredAmount.toFixed(2)}
              </p>
            </td>
          </tr>
          <tr>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="font-bold text-[#eb2f06]">Cancelled</p>
            </td>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="text-dark dark:text-white">
                {counts.cancelledCount}
              </p>
            </td>
            <td
              className={`border-b border-[#eee] px-4 py-4 dark:border-dark-3`}
            >
              <p className="text-dark dark:text-white">
                ${counts.cancelledAmount.toFixed(2)}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChartOne;
