import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = ({vertical, className="", setOpen}) => {
  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setOpen && setOpen(false);
  }
  return (
    <nav className={`header__nav ${vertical ? "header__nav--vertical" : ""} ${className}`} aria-label='Navigation'>
        <ul>
            <li><Link to="/" onClick={handleClick}>Home</Link></li>
            <li><Link to="#" onClick={handleClick}>About</Link></li>
            <li><Link to="#" onClick={handleClick}>Menu</Link></li>
            <li><Link to="/booking" onClick={handleClick}>Reservation</Link></li>
            <li><Link to="#" onClick={handleClick}>Order Online</Link></li>
            <li><Link to="#" onClick={handleClick}>Login</Link></li>
        </ul>
    </nav>
  )
}
export default Nav