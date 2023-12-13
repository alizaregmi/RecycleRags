import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
import axios from 'axios'

const NewCollection = () => {
  axios.get('https://dummyjson.com/products/1').then(res => {
       console.log(res.data)
});
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} bought_price={item.bought_price} new_price={item.selling_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection
