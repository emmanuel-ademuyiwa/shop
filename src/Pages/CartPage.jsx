import React,{ useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';

const CartPage = () => {

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
    <Layout>
      <div className="cartPage">

        <div className="cartList">
          
          {
            cart.map(cart => (

              <div className="cartItem" key={cart.id}>
                <div className="cartItemImg">
                  <img src={cart.image} alt="" />
                </div>
                <div className={`cartItemDetails ${theme.color}`}>
                  <h6 className={theme.color}>{cart.title}</h6>
                  <h6>${cart.price}</h6>
                </div>
              </div>

            ))          
          }

        </div>

        <div className="cartTotalDetails">
          <div className={theme.color}>
            <h4>Cart Summary</h4>
            <div className="cartTotal">
              <h5>Total items: {totalItems}</h5>
              <h5>Total price: {totalPrice.toFixed(2)}</h5>
            </div>
            <div className={`checkoutButton ${theme.color}`}>
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default CartPage