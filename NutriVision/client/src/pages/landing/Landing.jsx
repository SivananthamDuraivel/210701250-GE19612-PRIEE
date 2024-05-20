import React, { useEffect } from 'react'
import Nutrition from './../nutritionFolder/Nutrition';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Landing.css'

const Landing = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.post("http://localhost:4000/auth/verify")
    .then(res=>{
      if(!(res.data==="verified"))
        navigate('/signin')
    })
  },[navigate])

  return (
    <div >
    <br /><br /><br />  
    <center   ><h1>EXPLORE OUR FEATURES..!</h1></center>
    <div className="container">
      <div className="button-cont">
        <a href="/nutrition"><button className="button">Nutrition Analyser</button></a>
        <a href="/dietplanner"><button className="button">Diet Plans</button></a>
        <a href="/model"><button className="button">Predict Calorie</button></a>
        <a href="/diets"><button className="button">Diets</button></a>
      </div>
    </div>
  </div>
  )
}

export default Landing
