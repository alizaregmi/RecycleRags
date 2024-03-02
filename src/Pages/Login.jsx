import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleLogin = () => {
    axios.post('http://localhost:2000/login', {
      email, password
    })
      .then(res => {
        toast.success(res.data.message)
        localStorage.setItem("token", res.data.data)
        window.location.href = '/'
      })

  }

  return (
    <div>
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder='Email Address' onChange={e => { setEmail(e.target.value) }} />
            <input type="password" placeholder='Password' onChange={e => { setPassword(e.target.value) }} />
          </div>
          <button onClick={handleLogin}>Login</button>
          <p className="loginsignup-login">Create an account? <Link to={'/signup'} className='link'><span>Signup Here</span></Link></p>

        </div>
      </div>
    </div>
  )
}

export default Login
