import React from "react";
import tcs from "../../assets/logo/tcs.png";
import logo from "../../assets/logo/logo.png";
import { BsInfoLg } from "react-icons/bs";
import { PiArticleBold } from "react-icons/pi";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="flex flex-row justify-around items-center">
        <img className=" h-8 ml-64 flex " src={logo} alt="RMT" />
        <div className="flex flex-col items-center justify-center ">
          <span className="text-xl flex justify-center items-center">
            Tata Consultancy Services{" "}
          </span>
          <span className="text-md">PYQs - 2018</span>
        </div>
        <img className="h-8 mr-64" src={tcs} alt="tcs" />
      </div>
      <div className="flex bg-gray-800 justify-around text-white h-8 items-center">
        <span className="text-yellow-400">TCS</span>
        <div className="flex items-center justify-end">
          <PiArticleBold className="text-white bg-green-400 rounded-full w-5 h-5 " />
          <span className="flex  items-center ">Question Paper</span>
          <BsInfoLg className="text-white bg-blue-500 rounded-full w-5 h-5" />
          <span className="flex items-center  justify-end">
            View Instructions
          </span>
        </div>
      </div>
    </div>
  );
}
