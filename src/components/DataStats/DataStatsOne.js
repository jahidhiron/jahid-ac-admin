"use client";

import React from "react";
import { BsBoxes, BsBox2Fill, BsClipboard2X } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { LuClipboardCheck } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const StatsCard = ({ icon, color, title, value }) => (
  <div className="rounded-[10px] bg-white dark:bg-boxdark  p-6 shadow-1 dark:bg-gray-dark">
    <div
      className="flex h-14.5 w-14.5 items-center justify-center rounded-full text-white"
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
    <div className="mt-6 flex items-end justify-between">
      <div>
        <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
          {value}
        </h4>
        <span className="text-body-sm font-medium">{title}</span>
      </div>
    </div>
  </div>
);

const DataStatsOne = () => {
  const dataStatsList = [
    {
      icon: <BsBox2Fill className="text-2xl" />,
      color: "#be2edd",
      title: "Products",
      value: 1200,
    },
    {
      icon: <BsBoxes className="text-3xl" />,
      color: "#3FD97F",
      title: "Available Products",
      value: 980,
    },
    {
      icon: <MdOutlinePendingActions className="text-3xl" />,
      color: "#4834d4",
      title: "Pending Orders",
      value: 45,
    },
    {
      icon: <TbTruckDelivery className="text-3xl" />,
      color: "#FF9C55",
      title: "Delivering Orders",
      value: 15,
    },
    {
      icon: <LuClipboardCheck className="text-3xl" />,
      color: "#8155FF",
      title: "Completed Orders",
      value: 875,
    },
    {
      icon: <BsClipboard2X className="text-3xl" />,
      color: "#18BFFF",
      title: "Cancelled Orders",
      value: 20,
    },
    {
      icon: <FaUsers className="text-3xl" />,
      color: "#1e3799",
      title: "Customers",
      value: 4500,
    },
    {
      icon: <MdMarkEmailRead className="text-3xl" />,
      color: "#e84118",
      title: "Subscribers",
      value: 1230,
    },
  ];

  return (
    <div className="grid   grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {dataStatsList.map((item, index) => (
        <StatsCard
          key={index}
          icon={item.icon}
          color={item.color}
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default DataStatsOne;
