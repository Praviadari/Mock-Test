import { useState } from "react";
import React from "react";

export default function Qnos({ u }) {
  const [qno, setQNo] = useState(1);
  return (
    <div className="flex pl-2 gap-8 flex-wrap  scroll-smooth">
      <li className={qno === u.id ? "qno bg-blue-300" : "bg-transparent"}>
        <div
          className="qno border-black border-2 px-2  rounded-md  mb-2 font-normal hover:bg-blue-300 active:bg-blue-300 cursor-pointer "
          onClick={() => {
            setQNo(u.id);
          }}
        >
          {u.id}
        </div>
      </li>
    </div>
  );
}
