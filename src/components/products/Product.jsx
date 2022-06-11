import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem } from '../../redux/shopping/shopping-actions';

const Product = ({ id, title, price, img, product }) => {

  const dispatch = useDispatch()
  const color = useSelector(state => state.theme.background.color)

  return (
      <div className='productCard'>
        <div className="productImg">
            <img src={img} alt="" />
        </div>
        <div className="productDetails">
            <div className="productTitle">
              <Link className='link' to={`/detail/${id}`}>
                <h6 className={color} onClick={() => dispatch(loadCurrentItem(product))} >{title}</h6>
              </Link>
            </div>
            <div className="cart">
              <h6 className={color} >${price}</h6>
              <MdOutlineAddShoppingCart onClick={() => dispatch(addToCart(product))} className={`addCart ${color}`}/>
            </div>
        </div> 
      </div>
    
  )
}

export default Product