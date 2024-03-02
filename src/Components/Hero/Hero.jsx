import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'

const Hero = () => {


  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Recycle, Reuse</h2>
        <div>
          <div className="hero-hand-icon">
            <p>past</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>to present</p>
          <p>wardrobe</p>
        </div>
        <div className="hero-latest-btn" >
          <Link to='/sell' style={{ textDecoration: "none" }}>
            <div>
              Sell Now
            </div>
          </Link>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
