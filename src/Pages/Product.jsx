import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrums';
import axios from 'axios';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:2000/products/${productId}`)
      .then(res => {
        setProduct(res.data.data[0])

      })
      .catch(err => console.log(err))
  }, [])



  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts></RelatedProducts>
    </div>
  )
}

export default Product
