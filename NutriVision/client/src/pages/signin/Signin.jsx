import React, { useState } from 'react'
import './Signin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate=useNavigate(); 
    const [errorMsg,setErrorMsg]=useState('');

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    axios.defaults.withCredentials=true;
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        axios.post("http://localhost:4000/auth/signin",{
            email,password
        }).then(res=>{
          console.log("singin")
          if(res.data==="valid user")
            navigate("/landing");
          else
            setErrorMsg(res.data)
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
    }

  return (
    <div className='all'>
      
      <div className='Signin'>
        <form className='Signin-form' onSubmit={handleSubmit}>
        
          <center><h2>Welcome Back!</h2></center><br />
          
          <label htmlFor="">Email :</label>
          <input type="email" required placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' />
          
          <label htmlFor="">Password :</label>
          <input type="password" required placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='new-password' />
          <center><br /><p>Don't have an account, <a href="/signup" className='AnchorTag'>Sign Up</a></p></center>
          {errorMsg?(<center><br></br><p style={{color:'red'}}>{errorMsg}</p></center>):""}    
          <center><br /><p>Forgot your password ? <a href="/resetPassword" className='AnchorTag'>click here</a></p></center>
          <br />  <button type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Signin
