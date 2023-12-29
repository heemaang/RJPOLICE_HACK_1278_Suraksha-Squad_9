import React from "react";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex items-end justify-end">
        <img className="w-[300px]" src="./images/home.jpg" alt="" />
      </div>
      <h2 className="text-[#201c6d]">
        At 1920 Help_line, we're dedicated to simplifying the legal process for
        users and connecting them with experienced lawyers.
      </h2>
    </div>
  );
}
