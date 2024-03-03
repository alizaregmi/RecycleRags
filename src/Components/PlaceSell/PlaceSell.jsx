import React, { useState } from 'react'
import './PlaceSell.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const PlaceSell = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    productImage: null,
    productDescription: '',
    productSize: '',
    productBoughtPrice: '',
    productSellingPrice: '',
    productStatus: 'available',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const token = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageFile = e.target.querySelector('input[name="productImage"]');
    const form = new FormData();
    form.append('productName', formData.productName);
    form.append('productDescription', formData.productDescription);
    form.append('productSize', formData.productSize);
    form.append('productBoughtPrice', formData.productBoughtPrice);
    form.append('productSellingPrice', formData.productSellingPrice);
    form.append('productImage', imageFile.files[0]);
    form.append('productStatus', formData.productStatus);

    const response = await fetch('http://localhost:2000/products', {
      method: 'POST',
      headers: { Authorization: `${token}`, },
      body: form,

    });
    if (response.ok) {
      // Show a success toast
      toast.success('Product added successfully!');
      navigate('/sell');

      setFormData({
        productName: '',
        productImage: null,
        productDescription: '',
        productSize: '',
        productBoughtPrice: '',
        productSellingPrice: '',
        productStatus: 'available',
      });

    } else {
      // Handle other response statuses if needed
      toast.error('Please enter all Fields');
    }
  };





  return (
    <div className='container'>
      <div className='heading'>
        <h2>Put Your Thrift Clothes Here For Sell...</h2>
      </div>
      <div className="sell-form">
        <form onSubmit={handleSubmit}>
          <div className="left-part">
            <div className="product-name">
              <label htmlFor="">Product Name : </label>
              <input type="text" name="productName" value={formData.productName} onChange={handleInputChange} />
            </div>
            <div className="b-price">
              <label htmlFor="">Bought Price : </label>
              <input type="number" name="productBoughtPrice" value={formData.productBoughtPrice} onChange={handleInputChange} />
            </div>
            <div className="s-price">
              <label htmlFor="">  Selling Price : </label>
              <input type="number" name="productSellingPrice" value={formData.productSellingPrice} onChange={handleInputChange} />
            </div>
          </div>
          <div className="middle-part">
            <div className="product-size">
              <label htmlFor="">Product Size : </label>
              <input type="text" name="productSize" value={formData.productSize} onChange={handleInputChange} />
            </div>
            <div className="product-image">
              <label htmlFor="">Product Image : </label>
              <input type="file" name="productImage" value={formData.productImage} onChange={handleInputChange} />
            </div>
            {/* <div className="product-status" >
              <label htmlFor="">Product Status : </label>
              <input type="text" name="status" value={formData.status} onChange={handleInputChange} />
            </div> */}
          </div>
          <div className=" right-part">
            <div className="product-details">
              <label htmlFor="">Product Details / Condition : </label>
              <textarea rows="10" cols="50" name="productDescription" value={formData.productDescription} onChange={handleInputChange}> </textarea>
            </div>
            <div className="place-btn">
              <button >Submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default PlaceSell
