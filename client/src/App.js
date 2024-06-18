import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Home from './pages/Home'
import Productid from './pages/Productid'
import Review from './pages/Review'
import Toprated from './pages/Toprated'
import Nearby from './pages/Nearby'
import TopReview from './pages/TopReview'
const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/product' element={<Productid/>}/>
          <Route path='/addreview' element={<Review/>}/>
          <Route path='/toprated' element={<Toprated/>}/>
          <Route path='/nearby' element={<Nearby/>}/>
          <Route path='/topreview' element={<TopReview/>}/>




        </Routes>
    </div>
  )
}

export default App
