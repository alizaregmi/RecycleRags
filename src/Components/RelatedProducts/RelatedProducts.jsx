import React from 'react'
import './RelatedProducts.css'
import data_product from'../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} bought_price={item.bought_price} new_price={item.selling_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
