import React from 'react'

import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink  to='/add' className="sidebar-option">
          <img src={ assets.add_icon } alt='' />
          <p>Add item's</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={ assets.order_icon } alt='' />
          <p>List item's</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={ assets.order_icon } alt='' />
          <p>Order's</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
