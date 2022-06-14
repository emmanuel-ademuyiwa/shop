import React, { useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { addressCheck } from '../redux/checkout/checkout-action'


const Address = ({ address_check }) => {


  return (
    <div>
        <form action="" className="addressForm">
            <div className="name">
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
            </div>
            <div className="phoneContainer">
                <label htmlFor="">Mobile Phone Number</label>
                <input className='phoneNumber' type="text" />
            </div>
            <label htmlFor="">Address</label>
            <textarea onChange={address_check} className='address' name="" id="" cols="30" rows="7"></textarea>
        </form>
    </div>
  )
}

const mapStateToProps = () => {
    return {
  
    }
  } 
  
  const mapDispatchToProps = (dispatch) => {
    return {
        addressCheck: (val) => dispatch(addressCheck(val))
    }
  }

export default Address;