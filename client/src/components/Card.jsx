import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div>
        <div className="flex justify-center items-center ">
          <div className="relative flex flex-col w-96 group">
            <div className="relative w-full h-80 transition-transform transform group-hover:scale-105">
              <Link to='/product'>
              <img
                src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stcGYtcG9tLTEyNDIuanBn.jpg"
                alt="main"
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="absolute bottom-0 text-start py-6 font-bold text-black  px-4 text-6xl">
                Hotel Machester
              </p>
              
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
