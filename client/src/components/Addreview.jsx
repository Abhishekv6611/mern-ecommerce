import React from "react";
import { BiImageAdd } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const Addreview = () => {
  return (
    <div className="p-5">
              <h1 className="text-3xl font-playfair font-bold px-3 flex items-center gap-2 mb-3"><Link to={'/home'}><p className="border rounded p-1 hover:bg-black hover:text-white  transition"><MdArrowBackIosNew /></p></Link>Add Review</h1>
              <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="w-full lg:w-1/2 border-gray-700 border shadow-sm flex flex-col justify-center items-center h-[400px] rounded-lg">
          <label
            htmlFor="file-upload"
            className="custom-file-upload flex flex-col items-center cursor-pointer"
          >
            Upload image
            <BiImageAdd className="w-6 h-6 mt-2" />
          </label>
          <input id="file-upload" className="hidden" type="file" />
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <div className="p-5 flex flex-col gap-4">
            <div className="w-full flex flex-col items-start">
              <label htmlFor="restaurant-name">Restaurant Name</label>
              <input
                id="restaurant-name"
                type="text"
             
                className="bg-gray-300 rounded-lg text-black p-2 w-full"
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                className="bg-gray-300 rounded-lg text-black p-2 w-full"
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label htmlFor="message" className="block mb-2 text-gray-900">
                Your Opinion
              </label>
              <textarea
                id="message"
                rows="3"
               
                className="block p-2 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
          <div className="flex lg:flex-wrap gap-4">
            <div className="w-32 h-32 border flex items-center justify-center">
              <label htmlFor="file-1" className="custom-file-upload">
                <BiImageAdd className="w-6 h-6 ml-2" />
              </label>
              <input id="file-1" className="hidden" type="file" />
            </div>
            <div className="w-32 h-32 border flex items-center justify-center">
              <label htmlFor="file-2" className="custom-file-upload">
                <BiImageAdd className="w-6 h-6 ml-2" />
              </label>
              <input id="file-2" className="hidden" type="file" />
            </div>
            <div className="w-32 h-32 border flex items-center justify-center">
              <label htmlFor="file-3" className="custom-file-upload">
                <BiImageAdd className="w-6 h-6 ml-2" />
              </label>
              <input id="file-3" className="hidden" type="file" />
            </div>
            <div className="w-32 h-32 border flex items-center justify-center">
              <label htmlFor="file-4" className="custom-file-upload">
                <BiImageAdd className="w-6 h-6 ml-2" />
              </label>
              <input id="file-4" className="hidden" type="file" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addreview;
