import React, { useState, useEffect } from 'react';
import { FaBars, FaTimesCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchTheme } from '../redux/theme/theme-actions';

const Header = () => {

    const cart = useSelector(state =>  state.shop.cart)
    const theme = useSelector(state => state.theme.background)
    const switchCurrentTheme = useSelector(state => state.theme.switch.value)

    const dispatch = useDispatch()

    const [toggleMenu, setToggleMenu] = useState(false);
    const [cartCount, setCartCount] = useState(0);
  
    useEffect(() => { 
        let count = 0;
        cart.forEach((item) => { 
          count += item.qty
        })
    
        setCartCount(count)
      }, [cart, cartCount])

    function handleMenuClick() { 
        setToggleMenu(!toggleMenu)
    }

    const handleSwitch = () => { 
        dispatch(switchTheme())
    }

  return (
    <header className={ switchCurrentTheme ? "darkMode" : '' }>
        <div className="headerContainer">
            <nav>
                <Link className={ switchCurrentTheme ? "darkLink white" : "darkLink" } to="/"><h4 className="logo">E-Commerce</h4></Link>
                <ul className={ switchCurrentTheme ? "firstList white" : "firstList"}>
                    <Link className={ switchCurrentTheme ? "darkLink white" : "darkLink" } to='/'><li>All Products</li></Link>
                    <li>Leather Products</li>
                    <li>Comfort Sleepers</li>
                </ul>
                <ul className='secondList'>
                    <li>About Us</li>
                    <li>Blog</li>
                </ul>
                
                <div className="iconContainer">
                    <div className="cartContainer">
                        <Link to="/cart" className='link'><h4 className={`cart ${theme.color}`}>{cartCount}</h4></Link>
                    </div>
                    <div className="switch" onClick={handleSwitch}>
                        <div className="right">

                        </div>
                        <div className="left" >

                        </div>
                    </div>
                    <FaBars onClick={handleMenuClick} className='harmburger' />
                </div>
            </nav>

            {
                toggleMenu &&
                <div className="mobileNav">
                    <ul className='mobileNavList'>
                        <Link className={ switchCurrentTheme ? "link white" : "link" } to='/' onClick={handleMenuClick}><li>All Products</li></Link>
                        <li>Leather Products</li>
                        <li>Comfort Sleepers</li>
                        <li>About Us</li>
                        <li>Blog</li>
                    </ul>
                    <FaTimesCircle onClick={handleMenuClick} className='closeMenu'/>
                </div>
            }

        </div>
    </header>
  )
}

export default Header