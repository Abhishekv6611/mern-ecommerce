import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
    const navigate= useNavigate()

  const HandleClick = async () => {
    try{
  const user=await axios.post('http://localhost:9090/signin', { email, password })
  localStorage.setItem('token',user.data.token)
  navigate('/')
    }catch(err){
      console.log(err)
    }
  };
  return (
    <>
    <div className="flex flex-col lg:flex-row  lg:justify-between px-4  lg:px-8 " >
      <div className="flex   flex-col justify-center px-6 py-52 lg:py-12 lg:px-8 lg:w-[50%] w-full ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-slate-900  ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-3 ">
         
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                  >
                  Password
                </label>
                <div className="text-sm">
                  <p
                  
                    className="font-semibold text-slate-950 hover:text-slate-700 cursor-pointer">
                    Forgot password?
                  </p>
                </div>
              </div>
           
              <div className="mt-2">
                <input
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <button
              onClick={HandleClick}
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black border-black border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  mb-3"
              >
                Sign in
              </button>
              <div className="space-x-3 flex justify-center items-center">
              <button
                className=" rounded-md border border-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-slate-100"
                >
               <p  className="text-2xl"><FcGoogle /></p>
              </button>
              <button
                className=" rounded-md border border-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-slate-100"
              >
               <p href="" className="text-2xl text-cyan-600"><FaLinkedin/></p>
              </button>
              </div>
            </div>
     

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
           
            <a
              href="/signup"
              className="font-semibold leading-6 text-slate-900 hover:text-slate-600"
              >
              Sign up Here
            </a>
          
          </p>
        </div>
      </div>     
      <div className="hidden lg:block w-[50%]  relative">
        <img className="rounded-lg absolute w-[90%] p-2" src="https://gearfiles.gsmcdn.com/wp-content/uploads/sites/15/2023/03/28022651/marketing-for-restaurants-food-ordering-1.png" alt="" />
         <p className="relative p-4 text-xl  font-bold text-white font-playfair mt-1">Choose your best <span className="text-black">"Restaurant</span></p>
        
        </div>  
              </div>
    </>
  );
};

export default LoginCard;
