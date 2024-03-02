import React, { useContext } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ProductDisplay.css'
import { CartContext } from '../../Context/CartContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { productId } = useParams();
  const { setTotalCartItems } = useContext(CartContext);

  console.log(productId)


  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `${token}`,
    }
  };
  function addToCart() {
    axios.post(`http://localhost:2000/cart/${productId}`, "", config)
      .then(res => {
        console.log(res);
        toast.success(res.data.message)
        setTotalCartItems(current => current + 1)

      })
      .catch(err => console.log(err))
  }




  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.productImage} alt="" />
          <img src={product.productImage} alt="" />
          <img src={product.productImage} alt="" />
          <img src={product.productImage} alt="" />

        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.productImage} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.productName}</h1>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-bought">
            Rs {product.productBoughtPrice}
          </div>
          <div className="productdisplay-right-price-sell">
            Rs {product.productSellingPrice}
          </div>
          <div className="productdisplay-right-description">
            {product.productDescription}
          </div>
          {product.productStatus == "available" ? (
            <button onClick={() => addToCart()}>ADD TO CART</button>
          ) :
            (
              <button disabled>OUT OF STOCK</button>

            )}
          <p className='productdisplay-right-category'><span>Size:</span> {product.productSize}</p>
          {product.user && (
            <>
              <p className='productdisplay-right-category'><span>Seller:</span> {product.user.userFullName}, {product.user.userPhoneNumber}</p>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
