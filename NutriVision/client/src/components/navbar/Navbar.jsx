import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import axios from 'axios'



const Navbar = () => {

  const navigate = useNavigate();

  const handleLanding = () => {
    axios.defaults.withCredentials = true;
    console.log("clicked")
    axios.post("http://localhost:4000/auth/verify")
      .then(res => {
        if (res.data !== "verified")
          navigate('/signin')
        else
          navigate('/landing')
      })
      .catch(err => {
        console.log(err)
      })

  }
  const handleLogout = () => {
    axios.post('http://localhost:4000/auth/logout')
      .then(res => {
        if (res.data === "logged out")
          navigate('/')
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleHome=()=>{
    navigate('/');
  }

  return (
    <div className='navbar'>
    <div className='NavButtons'>
      <button onClick={handleHome} className='home'><strong>Home</strong></button>
      <div className='right-buttons'>
        <button onClick={handleLanding} className='nutritionAnalyser'><strong>Features</strong></button>
        <button onClick={handleLogout} className='logout'><strong>Logout</strong></button>
      </div>
    </div>
  </div>
  

  )
}

export default Navbar
