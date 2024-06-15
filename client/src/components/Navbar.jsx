import React from 'react'
import Logo from '../assests/logo_.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <section id='navbar'>
<nav class="bg-white border-gray-200 ">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Dribble</span>
            <img src={Logo} class="w-16" alt="Flowbite Logo" />
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a class="text-lg text-black">Username</a>
           <Link to={'/'}>
           <a href="#" class="text-sm  text-indigo-600 dark:text-blue-500 hover:underline">Login</a>
           </Link> 
        </div>
    </div>
<nav class="bg-white p-1">
  <div class="flex flex-wrap justify-center space-y-2 sm:space-y-0 sm:space-x-4">
    <button class="bg-black text-white text-base rounded-lg w-full sm:w-auto p-2 hover:bg-white hover:text-black hover:border-black border border-transparent cursor-pointer">
      Top Rated
    </button>
    <button class="bg-black text-white text-base rounded-lg w-full sm:w-auto p-2 hover:bg-white hover:text-black hover:border-black border border-transparent cursor-pointer">
      Add Review
    </button>
    <button class="bg-black text-white text-base rounded-lg w-full sm:w-auto p-2 hover:bg-white hover:text-black hover:border-black border border-transparent cursor-pointer">
      New Offer Spot
    </button>
    <button class="bg-black text-white text-base rounded-lg w-full sm:w-auto p-2 hover:bg-white hover:text-black hover:border-black border border-transparent cursor-pointer">
      Features
    </button>
  </div>
</nav>
</nav>





    </section>
  )
}

export default Navbar
