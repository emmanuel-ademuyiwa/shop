import React from 'react'
import { useDispatch } from 'react-redux';
import { checkAddress } from '../redux/shopping/shopping-actions';

const Button = ({ text, address }) => {
  
  const dispatch = useDispatch()

  function handleAddress() { 
    dispatch(checkAddress())
    console.log(address)
  }
  
  return (
    <button onClick={ handleAddress } className={  address.length >= 15 ? 'btn' : 'disabled'} disabled={address.length >= 15 ? false : true}>
        {text}
    </button>
  )
}

export default Button 