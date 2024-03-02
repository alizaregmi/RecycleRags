import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollection from '../Components/NewCollection/NewCollection'
import './CSS/Shop.css'


const Shop = () => {
  return (
    <div className="shop-wrapper">
      <Hero />
      <NewCollection />
      <Popular />
    </div>
  )
}

export default Shop
