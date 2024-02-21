import React from 'react'
import { ThemeToggler } from '../index'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux' 

const Navbar = () => {
    const { currentTheme } = useSelector((state) => state.theme)

  return (
    <nav className='navbar'>
        {/* logo container */}
        <header className="logo_container">
            {/*can use logo image later */}
            <Link to={'/'}>
                <h1 
                    style={{
                        color: currentTheme === 'light' ? 'var(--light-text)' : 'var(--dark-text)'
                    }}
                    className='logo_title'>MARVEL Restaurant</h1>
            </Link>
        </header>

        {/* navigation links & some other stuff on right side */}
        <ul className='right_side'>
            <li><ThemeToggler /></li>
            <li>
                <Link
                    style={{
                        color: `var(--${currentTheme}-text)`
                    }}
                    className='navlinks' to={'/orders'}>Orders</Link></li>
            <li>
                <Link
                    style={{
                        color: `var(--${currentTheme}-text)`
                    }}
                    className='navlinks' to={'/customers'}>Customers</Link></li>
            <li>
                <div className='user_profile_icon'>
                    <p style={{
                        color: `var(--${currentTheme}-text)`
                    }}>R</p>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar