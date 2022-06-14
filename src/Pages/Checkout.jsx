import React,{ useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Address from '../components/Address';
import Button from '../components/Button';
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';

const Checkout = () => {

  const cart = useSelector(state => state.shop.cart)
  const switchCurrentTheme = useSelector(state => state.theme.switch.value)
  //const theme = useSelector(state => state.theme.background)


  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [address, setAddress] = useState('')

  const address_check = (event) => {
      setAddress(event.target.value)
  }

  
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
      
      { cart.length === 0 ?
          <div style={{marginTop: '30px'}} className="cartTotalDetails">

            <div className={ switchCurrentTheme ? 'white' : 'black' }>
              <h4>Cart Summary</h4>
              <div className="cartTotal">
                <h5>Total items: {totalItems}</h5>
                <h5>Total price: {totalPrice.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        :
        <div className={ switchCurrentTheme ? "checkout white" : "checkout black "}>
       
          <>
            <div className="checkoutForm">
              <Address address_check={address_check} />
            </div>

          </>
        
        {/* deliveryType.address && 
          <div className={ switchCurrentTheme ? "deliveryType white" : "deliveryType black "}>
            
            <div className="deliveryChoice">
              <div className="homeDeliveryContainer">
                <div className="flex homeDelivery">
                  <input className='deliveryInput' type="radio" name="delivery-type" id="door-delivery" />
                  <label htmlFor="door-delivery">Door delivery</label>
                </div>

              </div>

              <div className="pickupContainer">
                <div className="flex pickUp">
                  <input className='deliveryInput' type="radio" name="delivery-type" id="pick-up" />
                  <label htmlFor="pick-up">Pick up</label>
                </div>
              </div>
            </div>

            { !deliveryType.delivery &&
            <div className="nextContainer">
                <Button text='Next' />
            </div>}
          </div>
            */}

          <div className="cartTotalDetails frame">
            <div className={ switchCurrentTheme ? 'white' : 'black' }>
              <h4>Cart Summary</h4>


              <div className="cartSummaryList">
          
                {
                  cart.map(cart => (

                    <div className="cartItem" key={cart.id}>
                      <div className="cartItemImg">
                        <img src={cart.image} alt="" />
                      </div>
                      <div className={ switchCurrentTheme ? "cartItemDetails white" : "cartItemDetails black" }>
                        <h6 className={ switchCurrentTheme ? "white" : "black" }>{cart.title}</h6>
                        <div className="flex">
                          <h6>${cart.price * cart.qty}</h6>
                          <h6>Qty: {cart.qty}</h6>
                        </div>
                      </div>
                    </div>

                  ))          
                }

              </div>


              <div className="cartTotal">
                <h5>Total items: {totalItems}</h5>
                <h5>Total price: {totalPrice.toFixed(2)}</h5>
              </div>
    
              <div className={ switchCurrentTheme ? 'checkoutButton white' : 'checkoutButton black' }>
                <Link to='/checkout'> <Button text='Make payment' address={address} /> </Link>
              </div>
            </div>
          </div>
        


      </div>}
     
    </Layout>
  )
}

export default Checkout