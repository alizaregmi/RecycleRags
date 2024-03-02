import React, { useEffect, useState } from 'react'
import './SellItems.css'
import axios from 'axios';
import Item from '../Item/Item'
import { toast } from 'react-toastify';

const SellItems = () => {
  const [sellItemsCurrent, setSellItemsCurrent] = useState([])
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `${token}`,
    }
  };

  const handelSell = (productId) => {
    axios.patch(`http://localhost:2000/products/${productId}`, { productStatus: "unavailable" }, config)
      .then(res => {
        toast.success("Product Sold successfully.")
        setSellItemsCurrent(prevProducts => prevProducts.filter(product => product._id !== productId))
      })
      .catch(err => console.log(err))

  }


  useEffect(() => {
    axios.get('http://localhost:2000/products/sell', config)
      .then(res => {
        console.log(res);
        setSellItemsCurrent(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='sell-items'>
      {
        sellItemsCurrent.length ? (
          sellItemsCurrent.map((item, i) => (
            <div key={i} className="your-item">
              <Item id={item._id} name={item.productName} image={item.productImage} bought_price={item.productBoughtPrice} new_price={item.productSellingPrice} />
              <button onClick={() => { handelSell(item._id) }}>Sell now</button>
            </div>
          ))
        ) : (
          <label>You haven't added anything for Sell.</label>
        )
      }
    </div>
  )
}

export default SellItems
