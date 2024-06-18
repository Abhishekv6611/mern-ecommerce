import React from 'react'
import Logo from '../assests/logo_.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
 const navigate=useNavigate()

 function Navi(){
  navigate('/addreview')
 }



  return (
    <section id='navbar'>
<nav className="bg-white border-gray-200 ">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold text-indigo-700 whitespace-nowrap">Dribble</span>
            <img src={Logo} className="w-16" alt="Flowbite Logo" />
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <p className="text-lg text-indigo-700 ">Username</p>
           <Link to={'/'}>
           <p className="text-semibold  text-indigo-700 ">Login</p>
           </Link> 
        </div>
    </div>
    <nav className="bg-white p-1">
  <div className="flex justify-center space-x-2 sm:space-x-4">
    <Link to={'/toprated'}>
    <button className="bg-indigo-700 text-white text-base rounded-lg  p-2 hover:bg-white hover:text-black hover:border-black border border-transparent cursor-pointer">
      Top Rated
    </button>
    </Link>

    <button onClick={Navi} className="bg-indigo-700 text-white text-base rounded-lg   p-2 hover:bg-white hover:text-black hover:border-black border border-transparent cursor-pointer">
      Add Review
    </button>
    <Link to={'/nearby'}>
    <button className="bg-indigo-700 text-white text-base rounded-lg   p-2 hover:bg-white hover:text-black hover:border-black border border-transparent cursor-pointer">
      Near By
    </button>
    </Link>
    <Link to={'/topreview'}>
    <button className="bg-indigo-700 text-white text-base rounded-lg  p-2 hover:bg-white hover:text-black hover:border-black border border-transparent cursor-pointer">
      Top Review
    </button>
    </Link>
  </div>
</nav>
</nav>
    </section>
  )
}

export default Navbar
