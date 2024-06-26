import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Account = () => {
  return (
    <section id="account">
      <div className="flex justify-around p-2">
        <div className="mt-28 px-28 w-[30%] ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
            alt="account"
          />
        </div>
        <div className="font-semibold text-2xl mt-28 py-0">
          <p>Username</p>
          <input className="border-3 border" type="text" />
          <p>Email</p>
          <input className="border-3 border" type="email" />
        </div>
      </div>
      <h1 className="px-12 text-2xl mt-5 font-semibold">username Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 mt-9">
    {/* card start */}
    <div className="flex justify-center items-center ">
          <div className="relative flex flex-col w-96 group">
            <div className="relative w-full h-80 transition-transform transform group-hover:scale-105">
              <Link to='/product'>
              <img
                src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stcGYtcG9tLTEyNDIuanBn.jpg"
                alt="main"
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="absolute bottom-0 text-start py-6 font-bold text-white  px-4 text-6xl">
                Hotel Machester
              </p>
              
              </Link>
            </div>
          </div>
        </div>

{/* card end */}
      </div>
    </section>
  );
};

export default Account;
