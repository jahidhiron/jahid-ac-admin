import React from "react";
import DataStatsOne from "../../DataStats/DataStatsOne";
import ChartOne from "../../Charts/ChartOne";
import ChartTwo from "../../Charts/ChartTwo";
import ChartThree from "../../Charts/ChartThree";

const Dashboard = () => {
  return (
    <div>
      <DataStatsOne />
      <ChartOne />
      <div className="flex gap-5 mt-10 w-full justify-between">
        <ChartTwo />
        <ChartThree />
      </div>
    </div>
  );
};

export default Dashboard;
