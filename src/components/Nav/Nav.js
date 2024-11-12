import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = ({vertical, className=""}) => {
  return (
    <nav className={`header__nav ${vertical ? "header__nav--vertical" : ""} ${className}`}>
        <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Menu</Link></li>
            <li><Link to="#">Reservation</Link></li>
            <li><Link to="#">Order Online</Link></li>
            <li><Link to="#">Login</Link></li>
        </ul>
    </nav>
  )
}
export default Nav