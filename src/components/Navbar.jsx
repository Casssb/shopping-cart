import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
    </nav>
  )
}

export default Navbar