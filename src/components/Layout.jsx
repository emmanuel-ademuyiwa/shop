import React from 'react'
import Header from './Header'
import {useSelector} from 'react-redux';

const Layout = ({ children }) => {

  const theme = useSelector(state => state.theme.background)

  return (
    <>
        <Header />
        <div className={theme.body}>
            {children}
        </div>
    </>
  )
}

export default Layout