import React from 'react'
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './ResetPassword.css'

const ResetPassword = () => {
    const navigate=useNavigate();
    const [errorMsg,setErrorMsg]=useState('');

    const [email,setEmail]=useState('');
    
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        axios.post("http://localhost:4000/auth/resetPassword",{
            email
        }).then(res=>{
          if(res.data==="sent")
          {
            alert("Check your email for reset password link");
            navigate("/signin");
          }
          else
            setErrorMsg(res.data)
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
    }

  return (
    <div className='all'>
      
      <div className='reset'> 
        <form className='resetPassword-form' onSubmit={handleSubmit}>
        
          <center><h2>Reset Password</h2></center><br />
          
          <label htmlFor="">Email :</label>
          <input type="email" required placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' />
          
          {errorMsg?(<center><br></br><p style={{color:'red'}}>{errorMsg}</p></center>):""}    
          <br />  <button type='submit'>send link</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
