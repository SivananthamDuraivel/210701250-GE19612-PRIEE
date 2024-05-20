import React from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const NewPassword = () => {
    const navigate=useNavigate();
    const {token}=useParams();
    console.log(token)

    const [errorMsg,setErrorMsg]=useState('');
    const [password,setPassword]=useState('');
    
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        axios.post("http://localhost:4000/auth/newPassword/"+token,{
            password
        }).then(res=>{
          if(res)
          {
            console.log(res)
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
    <div className='newPassword'>
      
      <form className='newPassword-form' onSubmit={handleSubmit}>
      
        <center><h2>Reset Password</h2></center><br />
        
        <label htmlFor="">New Password :</label>
        <input type="password" required placeholder='new password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='off' />
        
        {errorMsg?(<center><br></br><p style={{color:'red'}}>{errorMsg}</p></center>):""}    
        <br />  <button type='submit'>Reset</button>
      </form>
    </div>
  )
}

export default NewPassword
