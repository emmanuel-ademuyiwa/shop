import React from 'react';
import { useSelector } from 'react-redux';

const Address = ({ address_check }) => {

  const theme = useSelector(state => state.theme.switch.value)

  return (
    <div>
        <form action="" className="addressForm">
            <div className="name">
                <label htmlFor="">First Name</label>
                <input className={ theme ? 'darkInput' : '' } type="text" />
                <label htmlFor="">Last Name</label>
                <input className={ theme ? 'darkInput' : '' } type="text" />
            </div>
            <div className="phoneContainer">
                <label htmlFor="">Mobile Number</label>
                <input className={ theme ? 'darkInput' : '' } type="text" />
            </div>
            <label htmlFor="">Address</label>
            <textarea onChange={address_check} className={ theme ? 'address darkInput' : 'address' } name="" id="" cols="30" rows="7"></textarea>
        </form>
    </div>
  )
}


export default Address;