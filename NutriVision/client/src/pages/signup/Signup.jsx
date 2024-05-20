import React, { useState } from 'react'
import axios from 'axios'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { FaBookOpen } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaPersonRunning } from "react-icons/fa6";
// import { FaBeer } from 'react-icons/fa';

const Signup = () => {

    const navigate=useNavigate();
    const [errorMsg,setErrorMsg]=useState('');

    const [username,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(password!=confirmPassword)
        {
            window.alert("password and confirm password must be same");
            return;
        }
        axios.post("http://localhost:4000/auth/signup",{
            username,email,password,confirmPassword
        }).then(res=>{
            console.log(res)
            if(res.data==="registered")
                navigate('/signin')
            else
                setErrorMsg(res.data)
        }).catch((err)=>{
            console.error(err);
        })
    }

  return (
    <div className='all'>
      <div className='signup'>
        <form className='signup-form' onSubmit={handleSubmit}>
        
          <center><h2>Sign up</h2></center><br />

          <label htmlFor="">Username :</label>
          <input type="text" required placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)} autoComplete='off' />
          
          <label htmlFor="">Email :</label>
          <input type="email" required placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' />
          
          <label htmlFor="">Password :</label>
          <input type="password" required placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='new-password' />
          
          <label htmlFor="">Confirm Password :</label>
          <input type="password" required  placeholder='confirm password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} autoComplete='new-password'/>
          <center><br /><p>Already have an account, <a href="/signin" className='signin_anchor'>Sign In</a></p></center>
          {errorMsg?(<center><br></br><p style={{color:'red'}}>{errorMsg}</p></center>):""}    
          <br />  <button type='submit'>Sign Up</button>
        </form>
      </div>
      <div className='allContent'>
        <p className='content'>Create account</p>
        <p className='content2'>What will you get?</p><br /><br /><br />
        <p><FaBookOpen /><span>  </span>Unlimited read access of fitness article and blog posts.</p><br /><br />
        <p><IoFastFoodSharp />  Nutrition analzer according to the food which you enter.</p><br /> <br />
        <p><RiCalendarScheduleFill /> Diet planer.</p><br /><br />
        <p><FaPersonRunning /> Calorie tracker based on your workout and diet.</p><br />
      </div>
    </div>
   
  )
}

export default Signup
