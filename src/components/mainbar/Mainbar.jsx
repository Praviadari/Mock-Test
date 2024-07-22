import React from "react";
import { BsInfoLg } from "react-icons/bs";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import praveen from "../../assets/person/pravi.jpeg";

export default function Mainbar() {
  return (
    <div className="flex flex-row ">
      <div className="w-3/4 border-r-2">
        <div className="bg-white flex justify-between border-b-2">
          <span className="ml-4">Sections</span>
          <span className="mr-2">Time Left:180:00</span>
        </div>
        <div className="flex bg-white justify-between border-b-2">
          <ArrowLeftIcon style={{ color: "gray" }} />
          <div className="bg-blue-600 text-white w-24 flex justify-around items-center">
            <span className="py-1">Aptitute</span>
            <BsInfoLg title="Aptitute" className="bg-blue-400 rounded-full " />
          </div>
          <ArrowRightIcon
            style={{ color: "gray" }}
            className="flex justify-end"
          />
        </div>
        <div>
          <span>Question Type: Multiple Choice Question</span>
        </div>
        <div className="bg-blue-600  flex items-center justify-end h-8">
          <span className="text-white mr-1">View in : </span>
          <select name="language" id="language" className="mr-2">
            <option value="english">English</option>
            <option value="telugu">Telugu</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center ml-20">
        <img
          className=" object-cover rounded-md w-20 h-20 mr-2"
          src={praveen}
          alt="HOla"
        />
        <div className="Details ">
          <div className="rightbarInfoItem flex items-center mb-2.5">
            <span className="rightbarInfoKey mr-4">Name:</span>
            <span className="rightbarInfoValue">Praveen</span>
          </div>
          <div className="rightbarInfoItem flex items-center mb-2.5">
            <span className="rightbarInfoKey mr-2">Roll No:</span>
            <span className="rightbarInfoValue">20131A0331</span>
          </div>
          <div className="rightbarInfoItem flex items-center mb-2.5">
            <span className="rightbarInfoKey mr-8">City:</span>
            <span className="rightbarInfoValue">Kakinada</span>
          </div>
        </div>
      </div>
    </div>
  );
}
