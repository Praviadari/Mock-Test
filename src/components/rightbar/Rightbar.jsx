import React from "react";
import { Questions } from "../../dummyData";

import Qnos from "../qnos/Qnos";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="flex flex-col flex-wrap border-2  border-black w-1/4">
      <div className="rightbar flex flex-col  border-b-2 border-black p-0 m-0">
        <div className="flex flex-wrap p-0 m-0 ">
          <div className="flex items-center justify-around">
            <span className="ans w-10 h-10  border-2 border-green-500 flex items-center justify-center font-bold text-white ">
              0
            </span>
            <span className="flex justify-around ">Answered</span>
          </div>
          <div className="flex items-center ">
            <span className="ans1 bg-red-400 w-10 h-10  border-4 flex items-center justify-center font-bold text-white">
              1
            </span>
            <span>Not Answered</span>
          </div>
          <div className="flex items-center ml-4">
            <span className="w-10 h-10 rounded-md border-2 flex items-center justify-center font-bold bg-gray-300 border-gray-500">
              99
            </span>
            <span>Not visited</span>
          </div>
          <div className="flex items-center ">
            <span className="w-10 h-10 rounded-full border-4 flex items-center justify-center font-bold bg-indigo-700 text-white">
              0
            </span>
            <span>Marked for Review</span>
          </div>
          <div className="flex items-center ml-4">
            <span className=" h-10 w-10 rounded-full border-4 flex items-center justify-center font-bold bg-indigo-700 text-white">
              0
            </span>
            <span>
              Answered & Marked for Review ( will be considered for evaluation)
            </span>
          </div>
        </div>
        <div className="w-full bg-blue-600 text-white">
          <h1 className="text-xl  ml-4">TCS</h1>
        </div>
        <div className="qnos w-full">
          <ul className="qnos flex flex-wrap items-center">
            <h2 className=" px-2  text-xl w-full ">Choose a Question</h2>
            {Questions.map((u) => (
              <Qnos key={u.id} u={u} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center my-3 ">
        <button
          type="button"
          class="text-white bg-blue-300 dark:bg-blue-500 cursor-not-allowed font-medium rounded-md text-sm px-5 py-2 text-center "
          disabled
        >
          Submit
        </button>
      </div>
    </div>
  );
}
