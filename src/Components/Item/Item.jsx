import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={'http://localhost:2000/uploads/' + props.image} alt="" /></Link>
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
