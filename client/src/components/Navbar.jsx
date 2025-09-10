import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div className=" flex justify-between items-center
    mx-8 sm:mx-20 xl:mx-32 py-5 ">
      <img onClick={()=>navigate("/")} src={assets.logo} alt="logo" className="w-32 sm:w-44 cursor-pointer" />
      <button onClick={()=>navigate("/login")} className="flex items-center gap-2 rounded-full text-sm
      cursor-pointer bg-primary text-white px-5 py-2.5">
        Admin Login
        <img src={assets.arrow} alt="arrow" className="w-3"/>
      </button>
    </div>
  );
}
