import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-sell">
            Rs{props.new_price}
        </div>
        <div className="item-price-bought">
            Rs{props.bought_price}
        </div>
      </div>
    </div>
  )
}

export default Item
