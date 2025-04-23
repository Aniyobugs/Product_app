import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Signup/>
     <Login/> */}
     <Navbar/>
     <Routes >
      <Route path ='/' element={<Signup/>}/>
      <Route path ='/L' element={<Login/>}/>

      
     </Routes>
    </>
  )
}

export default App
