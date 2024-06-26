import React from 'react'
import { FadeLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="flex justify-center items-center  w-[100%] p-2 mt-32">
    <FadeLoader color="#36d7b7"/>
  </div>
  )
}

export default Loader

