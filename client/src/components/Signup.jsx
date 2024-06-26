import React, { useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loader from './loader'


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const HandleClick = async () => {
  
        setLoading(true);
          await axios.post('http://localhost:9090/signup',{ email, password }).then((user)=>{
              console.log(user)
              navigate('/')
        }).catch(err=>{
          // Handle error response
          if (err.response && err.response.data && err.response.data.message === "User already exists") {
              alert("User already exists")
          } else {
              console.log(err);
          }
        }).finally(()=>{
          setLoading(false);
        })
    
};




  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false) 
    }, 7000)

    return () => clearTimeout(timer)
  }, [loading])


  return (
    <>
      {loading ? (
       <Loader/>
      ) : (
        <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8">
          <div className="flex min-h-full flex-col justify-center px-6 py-52 lg:py-12 lg:px-8 w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-black">
                SIGN UP
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-3">
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2"
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
                </div>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={HandleClick}
                  className="flex w-full justify-center rounded-md border-2 border-black bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-3"
                >
                  Sign in
                </button>
                <div className="space-x-3 flex justify-center items-center">
                  <button
                    className="rounded-md border border-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-100"
                  >
                    <a href="#" className="text-2xl"><FcGoogle /></a>
                  </button>
                  <button
                    className="rounded-md border border-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-100"
                  >
                    <a href="#" className="text-2xl text-cyan-600"><FaLinkedin /></a>
                  </button>
                </div>
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Already a member?
                <a
                  href="/signin"
                  className="font-semibold leading-6 text-slate-900 hover:text-slate-600"
                >
                  Sign In Here
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Signup
