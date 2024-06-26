import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Addreview = () => {
  return (
    <div className="p-5">
              <h1 className="text-3xl font-playfair font-bold px-3 flex items-center gap-2 mb-3"><Link to={'/'}><p className="border rounded p-1 hover:bg-black hover:text-white  transition"><MdArrowBackIosNew /></p></Link>Add Review</h1>
             <ReviewCard/>
    </div>
  );
};

export default Addreview;
