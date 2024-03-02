import React, { useEffect, useState } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Signup = () => {

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const navigate= useNavigate();
  
  useEffect(() => {
  
  }, [])
  
  const handleRegister= ()=>{
    axios.post('http://localhost:2000/register',{
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      username: userName 
    })
    .then(res=>{
      navigate('/login')
      toast.success('Account Created Successfully!')
    })
    .catch(err=>{
      toast.error(err.response.data.message)
    })
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' onChange={e=>{setUserName(e.target.value)}}/>
          <input type="number" placeholder='Phone Number' onChange={e=>{setPhoneNumber(e.target.value)}}/>
          <input type="email" placeholder='Email Address' onChange={e=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder='Password' onChange={e=>{setPassword(e.target.value)}}/>
          
        </div>
        <button onClick={handleRegister}>Sign Up</button>
        <p className="loginsignup-login">Already have an account? <Link to={'/login'} className='link'><span>Login Here</span></Link></p>
        
      </div>
    </div>
  )
}

export default Signup