import React from "react";
import { BiCog, BiRevision, BiAlarm } from "react-icons/bi";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data1, Data2, Data3, Data4 } from "../utils/Data";
import LineChart from "../components/LineChart";
import { BarChart } from "../components/BarChart";
Chart.register(CategoryScale);

function Dashboard() {
  const [chartData, setChartData] = useState(Data1);

  const [chartData2, setChartData2] = useState(Data2);

  const [chartData3, setChartData3] = useState(Data3);

  const [chartData4, setChartData4] = useState(Data4);

  return (
    <div className="bg-slate-50">
      <div className="bg-[#2e4969] w-full h-[29rem]">
        <LineChart chartData={chartData} max={200} step={50} />
      </div>

      <div className="-translate-y-10 mx-10 flex justify-around pb-20">
        <div className="bg-white w-[20rem] h-[18rem] px-4">
          <div className="flex justify-between">
            <div className="p-3 space-y-3">
              <p className="text-xs ">Global sales</p>
              <p className="text-xl font-semibold">Shipped Products</p>
            </div>
            <div className="flex items-center">
              <div className="w-11 h-11 rounded-full border-2 flex items-center justify-center">
                <BiCog size={20} color="gray" />
              </div>
            </div>
          </div>
          <div>
            <LineChart
              chartData={chartData2}
              width={500}
              height={170}
              step={10}
              max={400}
              pt={0}
              px={0}
              pb={0}
              labelx={false}
              labely={false}
            />
          </div>
          <div className="flex items-center px-2 ">
            <BiRevision color="gray" />
            <p>Just updated</p>
          </div>
        </div>

        <div className="bg-white w-[20rem] h-[18rem] px-4">
          <div className="flex justify-between">
            <div className="p-3 space-y-3">
              <p className="text-xs ">2018 sales</p>
              <p className="text-xl font-semibold">All Products</p>
            </div>
            <div className="flex items-center">
              <div className="w-11 h-11 rounded-full border-2 flex items-center justify-center">
                <BiCog size={20} color="gray" />
              </div>
            </div>
          </div>
          <div>
            <LineChart
              chartData={chartData3}
              width={500}
              height={170}
              pt={0}
              px={0}
              pb={0}
              color="gray"
              labelx={false}
            />
          </div>
          <div className="flex items-center px-2 ">
            <BiRevision color="gray" />
            <p>Just updated</p>
          </div>
        </div>

        <div className="bg-white w-[20rem] h-[18rem] px-4">
          <div className="flex justify-between">
            <div className="p-3 space-y-3">
              <p className="text-xs ">Email statistics</p>
              <p className="text-xl font-semibold">24 hour performance</p>
            </div>
           
          </div>
          <div>
            <BarChart chartData={chartData4} />
          </div>
          <div className="flex items-center px-2">
            <BiAlarm color="gray" />
            <p>Last 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
