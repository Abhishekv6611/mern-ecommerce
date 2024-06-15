import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from './pages/signup'
const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default App
