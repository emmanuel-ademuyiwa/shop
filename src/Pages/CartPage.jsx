import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

import {AiFillPlusCircle, AiFillMinusCircle, AiOutlineDelete} from 'react-icons/ai';
import { removeFromCart, increaseItem, decreaseItem } from '../redux/shopping/shopping-actions';

const CartPage = () => {

  const cart = useSelector(state => state.shop.cart)
  const dispatch = useDispatch()
  const switchTheme = useSelector(state => state.theme.switch.value)


  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  useEffect(() => { 
    let items = 0;
    let price = 0
    cart.forEach((item) => { 
      items += item.qty;
      price += item.qty * item.price
    })

    setTotalItems(items)
    setTotalPrice(price)
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice])

  return (
    <Layout>
      <div className="cartPage">

        <div className="cartList">
          
          {
            cart.map(cart => (

              <div className={switchTheme ? "white" : '' } key={cart.id} >
                <div className="cartItem">
                  <div className="cartItemImg">
                    <img src={cart.image} alt="" />
                  </div>
                  <div className={ switchTheme ? "cartItemDetails white" : "cartItemDetails black" }>
                    <div className="cartTitle">
                      <h6 className={ switchTheme ? "white" : "black" }>{cart.title}</h6>
                    </div>
              
                  </div>
                </div>

                <div className="cartPriceQty">
                  <AiOutlineDelete onClick={() => dispatch(removeFromCart(cart.id))} className='icon red' />
                  <div className="qty">
                    <AiFillPlusCircle className='icon' onClick={() => dispatch(increaseItem(cart.id))} />
                    <h6>{cart.qty}</h6>
                    <AiFillMinusCircle className='icon' onClick={ cart.qty === 1 ? null : () => dispatch(decreaseItem(cart.id))} />
                  </div>
                  <h6>${cart.qty * cart.price.toFixed(2)}</h6>
                </div>

              </div>

            ))          
          }

        </div>

        <div className="cartTotalDetails">
          <div className={ switchTheme ? "white" : "black" }>
            <h4>Cart Summary</h4>
            <div className="cartTotal">
              <h5>Subtotal</h5>
              <h5>{totalPrice.toFixed(2)}</h5>
            </div>
            { cart.length >= 1 && <div className={ switchTheme ? "checkoutButton white" : "checkoutButton black" }>
              <Link to='/checkout'><button className='button' >Proceed to checkout</button></Link>
            </div>}
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default CartPage