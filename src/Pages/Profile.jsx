import React, { useEffect, useState } from 'react'
import Picture from '../Components/Assets/profile.png'
import './CSS/Profile.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {

  // const [fullName, setFullName] = useState();
  // const [email, setEmail] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  // const [location, setLocation] = useState();
  const [data, setData] = useState([])
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `${token}`,
    }
  };

  useEffect(() => {
    axios.get('http://localhost:2000/profile', config)
      .then(res => {
        setData(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])



  const removeAccount = () => {
    localStorage.removeItem("token");
    toast.warning("Logged Out !!!")
    window.location.href = '/login';
  };

  function handleSubmit(event) {
    event.preventDefault()
    axios.patch('http://localhost:2000/profile', data, config)
      .then(res => {
        toast.success(res.data.message)
        navigate('/profile')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="main">
      <div className="user-details">
        <div>
          <img src={Picture} alt="" />
          <h2>{data.userFullName}</h2>
          {/* <h2>{data.userEmail}</h2>
          <h2>{data.userPhoneNumber}</h2> */}

          <button className='logout-btn' onClick={removeAccount}>Logout</button>
        </div>
      </div>


      <div className="edit-details">
        <form>
          <h2>Edit Details</h2>
          <label>Full Name</label>
          <input type="text" value={data.userFullName} onChange={e => setData({ ...data, userFullName: e.target.value })} />
          <label>Email address</label>
          <input type="text" value={data.userEmail} onChange={e => setData({ ...data, userEmail: e.target.value })} />
          <label>Phone Number</label>
          <input type="text" value={data.userPhoneNumber} onChange={e => setData({ ...data, userPhoneNumber: e.target.value })} />
          <label>Location</label>
          <input type="location" value={data.userLocation} onChange={e => setData({ ...data, userLocation: e.target.value })} />
          {/* {console.log(data)}       */}
          <button className='btn' onClick={handleSubmit} >Update</button>
        </form>

      </div>
    </div>
  )
}

export default Profile
