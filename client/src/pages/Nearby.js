import React from "react";
import { PiBowlSteamFill } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
const TopRated = () => {
  return (
    <section id="toprated" className="p-5"> 
              <h1 className="text-3xl font-playfair font-bold px-3 flex items-center gap-2 mb-3"><Link to={'/home'}><p className="border rounded p-1 hover:bg-black hover:text-white  transition"><MdArrowBackIosNew /></p></Link>Near By</h1>
              <div className="flex flex-col md:flex-row p-2 mt-9">
        <div className="h-full w-full md:w-1/2 transition-transform transform group-hover:scale-105">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://tableo.com/wp-content/uploads/Restaurant-Stock-Images-e1699951587809.webp"
            alt="Hotel Machester"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col  md:pl-10">
          <h1 className=" md:text-left text-indigo-700 font-bold text-3xl md:text-5xl mb-5 md:mb-11">Hotel Machester</h1>
          <div className="flex py-4  gap-24 mb-5">
            <div className="flex items-center gap-2">
              <PiBowlSteamFill className="text-3xl" />
              <p>11,120</p>
            </div>
            <div className="flex items-center gap-2">
              <TfiComment className="text-2xl"/>
              <p>800</p>
            </div>
          </div>
          <div className="flex items-center justify-start  gap-2 text-bold">
            <FaLocationDot className="text-xl" />
            <h1>Location</h1>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default TopRated;
