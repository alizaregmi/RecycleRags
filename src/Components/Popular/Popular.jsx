import React, { useEffect, useState } from 'react'
import './Popular.css'
import axios from 'axios';
import Item from '../Item/Item'

const Popular = () => {
  const [popularItem, setPopularItem] = useState([])

  useEffect(() => {
    axios.get('http://localhost:2000/products/')
      .then(res => {
        setPopularItem(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='popular'>
      <h1>ALL PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        {popularItem.map((popularItem, i) => {
          return <Item key={i} id={popularItem._id} name={popularItem.productName} image={popularItem.productImage} bought_price={popularItem.productBoughtPrice} new_price={popularItem.productSellingPrice} />
        })}
      </div>
    </div>
  )
}

export default Popular
