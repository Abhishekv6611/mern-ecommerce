import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HomeBody from '../components/body'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()

  useEffect(()=>{
    const token=localStorage.getItem('token')
   axios.get('http://localhost:9090/',{headers:{
    Authorization:token,
   }}).then(res=>{
    console.log(res);
   }).catch(err=>{
    console.log(err);
    navigate('/signin')
   })

  },[])
  return (
    <div>
      <Navbar/>
      <HomeBody/>
    </div>
  )
}

export default Home
