import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { toast } from 'react-toastify';
import { CartContext } from '../../Context/CartContext';


const CartItems = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { setTotalCartItems } = useContext(CartContext);




  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `${token}`,
    }
  };

  useEffect(() => {
    axios.get("http://localhost:2000/cart", config)
      .then(res => {
        setAllProducts(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    let totalProductAmount = 0;
    for (const product in allProducts) {
      const productAmount = allProducts[product].product.productSellingPrice * allProducts[product].quantity;
      totalProductAmount += productAmount;
    }
    setTotalAmount(totalProductAmount);
  }, [allProducts])


  const removeFromCart = (id) => {
    axios.delete(`http://localhost:2000/cart/${id}`, config)
      .then(res => {
        toast.error(res.data.message);
        setTotalCartItems(current => current - 1)
        setAllProducts(prevProducts => prevProducts.filter(product => product.product._id !== id));
      })
      .catch(err => {
        console.error('Error removing item from cart:', err);
      });
  }
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>

      </div>
      <hr />

      {allProducts.map((e) => {
        // setTotalAmount(e.product.productSellingPrice * e.quantity)
        return <div key={e.product._id}>
          <div className="cartitems-format cartitems-format-main">
            <img src={e.product.productImage} alt="" className='carticon-product-icon ' />
            <p>{e.product.productName}</p>
            <p>Rs {e.product.productSellingPrice}</p>
            <button className='cartitems-quantity'>{e.quantity}</button>
            <p>Rs {e.product.productSellingPrice * e.quantity}</p>
            <img className='cartitem-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.product._id) }} alt="" />
          </div>
          <hr />
        </div>

      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>Rs {totalAmount}</p>
            </div>
            <hr />
          </div>
          {/* <button>PROCEED TO CHECKOUT</button> */}
        </div>
      </div>
    </div>
  )
}

export default CartItems
