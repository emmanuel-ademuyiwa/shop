import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem } from '../../redux/shopping/shopping-actions';
// import { Image, Shimmer } from 'react-shimmer'

const Product = ({ id, title, price, img, product }) => {

  const dispatch = useDispatch()
  const switchTheme = useSelector(state => state.theme.switch.value)

  return (
      <div className='productCard'>
        <div className="productImg">
            <img src={img} alt="" />
        </div>
        <div className="productDetails">
            <div className="productTitle">
              <Link className='darkLink' to={`/detail/${id}`}>
                <h6 className={ switchTheme ? "white" : "black" } onClick={() => dispatch(loadCurrentItem(product))} >{title}</h6>
              </Link>
            </div>
            <div className="cart">
              <h6 className={ switchTheme ? "white" : "black" }  >${price}</h6>
              <MdOutlineAddShoppingCart onClick={() => dispatch(addToCart(product))} className={ switchTheme ? "addToCart white" : "addToCart black" } />
            </div>
        </div> 
      </div>
    
  )
}

export default Product