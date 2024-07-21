import React from "react";
import Rightbar from "./components/rightbar/Rightbar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Mainbar from "./components/mainbar/Mainbar";
import Bottombar from "./components/bottombar/Bottombar";
import Trivia from "./components/trivia/Trivias";

function App() {
  return (
    <div className="h-screen">
      <Topbar />
      <Mainbar />
      <div className="app  flex bg-blue-100 ">
        <div className="main w-9/12 ">
          <Trivia />
        </div>
        <Rightbar />
      </div>
      <Bottombar />
    </div>
  );
}

export default App;
