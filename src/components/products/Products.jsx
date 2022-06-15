import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useQuery} from 'react-query'
import axios from 'axios'
import Product from './Product';
import { Image, Shimmer } from 'react-shimmer'

async function fetchPosts(){
  const {data} = await axios.get('https://fakestoreapi.com/products')    
  return data
}


const Products = () => {

  const {data, error, isError, isLoading } = useQuery('posts', fetchPosts) 


  const products = useSelector(state => state.shop.products)
  const [productArray] = useState(products);

  //setProductArray(data)
  console.log(data)

  if(isLoading){
    return(
      <div className="products container">
        {
          productArray.map((product) => (
            
            <div className="productCard" key={product.id}>
              <Image className="productImg"
                src='https://fakestoreapi.com/products'
                fallback={<Shimmer width={250} height={180} />}
              />
            </div>
            
          ))
          }
    </div>
    )
  }
  if(isError){
      return <div className="products container">Error! {error.message}</div>
  }

  return (
    <div className="products container">
        {
          data.map((product) => (
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