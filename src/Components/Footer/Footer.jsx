import React from 'react'
import './Footer.css'
import logo from '../Assets/Logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
   const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='footer'>
      <div className="footer-logo">
        <Link to='/'><img  onClick={handleLogoClick}  src={logo} alt="" /></Link>
        <p>RecycleRags</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
