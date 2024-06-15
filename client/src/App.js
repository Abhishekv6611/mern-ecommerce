import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
