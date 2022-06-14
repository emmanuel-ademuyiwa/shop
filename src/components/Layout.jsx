import React from 'react'
import Header from './Header'
import {useSelector} from 'react-redux';

const Layout = ({ children }) => {

  const theme = useSelector(state => state.theme.switch.value)

  return (
    <>
        <Header />
        <div className={ theme ? "darkContainer" : "container" }>
            {children}
        </div>
    </>
  )
}

export default Layout