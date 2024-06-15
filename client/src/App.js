import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignIn from './pages/signin'
const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<SignIn/>}/>
        </Routes>
    </div>
  )
}

export default App
