import React, { useEffect, useState } from 'react'
import './History.css'
import axios from 'axios';
import Item from '../Item/Item'

const History = () => {
  const [sellItemsHistory, setSellItemsHistory] = useState([]);
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `${token}`,
    }
  };


  useEffect(() => {
    axios.get('http://localhost:2000/products/history', config)
      .then(res => {
        console.log(res);
        setSellItemsHistory(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='sold-items'>
      {
        sellItemsHistory.length ? (
          sellItemsHistory.map((item, i) => (
            <div key={i} className="your-sold-item">
              <Item id={item._id} name={item.productName} image={item.productImage} bought_price={item.productBoughtPrice} new_price={item.productSellingPrice} />
            </div>
          ))
        ) : (
          <label>You haven't sold anything yet.</label>
        )
      }
    </div>
  )
}

export default History
