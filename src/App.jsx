import React from "react";
import Rightbar from "./components/rightbar/Rightbar";
import Trivia from "./components/trivia/Trivia";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Mainbar from "./components/mainbar/Mainbar";
import Bottombar from "./components/bottombar/Bottombar";

function App() {
  return (
    <div className="h-screen">
      <Topbar />
      <Mainbar />
      <div className="app  flex bg-blue-100 ">
        <div className="main w-9/12 ">
          <Trivia />
        </div>
          <Rightbar  />
      </div>
      <Bottombar />
    </div>
  );
}

export default App;
