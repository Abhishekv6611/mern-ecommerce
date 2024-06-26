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
import Account from './pages/AccountPage'
const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Productid/>}/>
          <Route path='/addreview' element={<Review/>}/>
          <Route path='/toprated' element={<Toprated/>}/>
          <Route path='/nearby' element={<Nearby/>}/>
          <Route path='/topreview' element={<TopReview/>}/>
          <Route path='/topreview' element={<TopReview/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
    </div>
  )
}

export default App
