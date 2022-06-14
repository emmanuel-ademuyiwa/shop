import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';


const Products = () => {

  const products = useSelector(state => state.shop.products)
  const [productArray, setProductArray] = useState(products);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProductArray(data))
  }, [])

  return (
    <div className="products container">
        {
          productArray.map((product) => (
            <Product 
              product={product}
              id={product.id}
              key={product.id}
              title={product.title} 
              price={product.price}
              img={product.image} 
          />
          ))
          }
    </div>
  )
}

export default Products