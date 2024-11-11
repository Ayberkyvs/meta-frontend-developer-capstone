import React from 'react'
import "./Nav.css"

const Nav = ({vertical, className=""}) => {
  return (
    <nav className={`header__nav ${vertical ? "header__nav--vertical" : ""} ${className}`}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}
export default Nav