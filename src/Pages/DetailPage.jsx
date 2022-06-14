import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { addToCart } from '../redux/shopping/shopping-actions';

const DetailPage = () => {

  const dispatch = useDispatch()
  const switchTheme = useSelector(state => state.theme.switch.value)
  const currentItem = useSelector(state => state.shop.currentItem)
  const { title, description, price, image } = currentItem

  return (
    <Layout>
      <div className="detailCard">
        <div className="detailImg">
          <img src={image} alt="" />
        </div>
        <div className={ switchTheme ? "detailPricing white" : "detailPricing black" }>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="cart">
              <h4>${price}</h4>
              <MdOutlineAddShoppingCart onClick={() => dispatch(addToCart(currentItem))} className='addCart'/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailPage