import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assests/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate()

    const [menu, setMenu ] = useState("Home")

    const { getTotalCartAmount, token ,setToken } = useContext(StoreContext)

    const logout = () => {
      localStorage.removeItem("token")
      setToken("")
      navigate('/')
    }

  return (
    <div className='navbar'>
      <Link to='/' ><img src={ assets.logo } alt='logo' className='logo' /> </Link>
      <ul className="navbar-menu">
        <li onClick={() => setMenu("Home")} className={ menu === 'Home'?'active':""} >Home</li>
        <li onClick={() => setMenu("Menu")}  className={ menu === 'Menu'?'active':''} >Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={ menu === 'mobile-app'?'active':''} >mobile-app</li>
        <li onClick={() => setMenu("Contact US")} className={ menu === 'Contact US'?'active':''} >Contact US</li>
      </ul>
      <div className="navbar-right">
        <img src={ assets.search_icon } alt='search_icon' />
        <div className='navbar-search_icon'>
           <Link to='/cart' ><img src={ assets.basket_icon } alt='basket-icon' />  </Link> 
            <div className={ getTotalCartAmount()=== 0?"":"dot"}></div>
        </div>
        {!token?
        <button onClick={() => setShowLogin(true)}>Sign In</button>
        : <div className='navbar-profile'> 
        <img src={ assets.profile_icon} alt='' />
        <ul className="nav-profile-dropdown">
          <li onClick={() => navigate('/myorders')}><img src={ assets.bag_icon} alt='' /> <p>Orders</p></li>
          <hr />
          <li onClick={ logout}><img src={assets.logout_icon} alt='' /><p>Logout</p></li>
        </ul>
        </div>
        }

      </div>
    </div>
  )
}

export default Navbar
