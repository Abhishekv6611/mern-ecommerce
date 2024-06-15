import React, { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Signup = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const HandleClick=()=>{
    console.log(email,password)
  }
  return (
    <>
    <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8">

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-indigo-700  ">
            SIGN UP
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
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
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
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <button
              onClick={HandleClick}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-3"
              >
                Sign in
              </button>
              <div className="space-x-3 flex justify-center items-center">
              <button
                className=" rounded-md border border-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-slate-100"
                >
               <a href="" className="text-2xl"><FcGoogle /></a>
              </button>
              <button
                className=" rounded-md border border-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-slate-100"
              >
               <a href="" className="text-2xl text-cyan-600"><FaLinkedin/></a>
              </button>
              </div>
            </div>
     

          <p className="mt-10 text-center text-sm text-gray-500">
           Already a member?
           <Link to={'/'}>
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
              Sign In Here
            </a>
           
           </Link>
          </p>
        </div>
      </div>      
              </div>
    </>
  )
}

export default Signup
