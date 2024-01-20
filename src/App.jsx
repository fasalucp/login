import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navigation from './assets/Components/Navigation'
import Login from './assets/Components/Login'
import Signup from './assets/Components/Signup'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
    </Route >
   </Routes>
  )
}

export default App