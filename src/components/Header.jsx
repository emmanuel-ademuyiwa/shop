import React, { useState, useEffect } from 'react';
import { FaBars , FaTimes} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { darkMode, lightMode } from '../redux/theme/theme-actions';

const Header = () => {

    const cart = useSelector(state =>  state.shop.cart)
    const theme = useSelector(state => state.theme.background)
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

    const handleLightMode = () => { 
        dispatch(lightMode())
    }

    const handleDarkMode = () => { 
        dispatch(darkMode())
    }

  return (
    <header className={theme.header}>
        <div className="headerContainer">
            <nav>
                <Link className={`link ${theme.color}`} to="/"><h4 className="logo">E-Commerce</h4></Link>
                <ul className={`firstList ${theme.color}`}>
                    <li>All Products</li>
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
                    <div className="switch">
                        <div className="right" onClick={handleLightMode} >

                        </div>
                        <div className="left" onClick={handleDarkMode} >

                        </div>
                    </div>
                    <FaBars onClick={handleMenuClick} className='harmburger' />
                </div>
            </nav>

            {
                toggleMenu &&
                <div className="mobileNav">
                    <ul className='mobileNavList'>
                        <li>All Products</li>
                        <li>Leather Products</li>
                        <li>Comfort Sleepers</li>
                        <li>About Us</li>
                        <li>Blog</li>
                    </ul>
                    <FaTimes onClick={handleMenuClick} className='closeMenu'/>
                </div>
            }

        </div>
    </header>
  )
}

export default Header