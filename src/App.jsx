import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Maain from './components/Maain'
import Admin from './components/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Signup/>
     <Login/> */}
     {/* <Navbar/> */}
     <Routes >
      <Route path ='/' element={<Signup/>}/>
      <Route path ='/L' element={<Login/>}/>
      <Route path ='/admin' element={<Maain child={<Admin/>}/>}/>
      </Routes>
    </>
  )
}

export default App
