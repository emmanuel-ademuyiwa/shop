import React,{ useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartTotal = () => {


  const cart = useSelector(state => state.shop.cart)
  const theme = useSelector(state => state.theme.background)


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
    <>
        <div className="cartTotalDetails">
          <div className={theme.color}>
            <h4>Cart Summary</h4>
            <div className="cartTotal">
              <h5>Total items: {totalItems}</h5>
              <h5>Total price: {totalPrice.toFixed(2)}</h5>
            </div>
            <div className={`checkoutButton ${theme.color}`}>
              <Link to='/checkout'><button>Proceed to checkout</button></Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default CartTotal