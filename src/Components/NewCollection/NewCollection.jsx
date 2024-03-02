import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import axios from 'axios';
import Item from '../Item/Item'

const NewCollection = () => {
  const [newItem, setNewItem] = useState([])

  useEffect(() => {
    axios.get('http://localhost:2000/products/')
      .then(res => {
        setNewItem(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])



  return (
    <div className='new-collections'>
      <h1>NEWLY ADDED</h1>
      <hr />
      <div className="collections">
        {newItem
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4)
          .map((newItem, i) => (
            <Item
              key={i}
              id={newItem._id}
              name={newItem.productName}
              image={newItem.productImage}
              bought_price={newItem.productBoughtPrice}
              new_price={newItem.productSellingPrice}
            />
          ))}
      </div>
    </div>
  )
}

export default NewCollection
