import React from 'react'
import Nav from '../Nav/Nav'
import "./Footer.css"

export default function Footer() {
  return (
    <footer id='footer' className='grid'>
      <img className='footer__logo' src='https://via.placeholder.com/152x295'/>
      <div className='footer__navbar'>
        <div>
          <h3>Navigation</h3>
          <Nav vertical className='footer__nav'/>
        </div>
        <div>
          <h3>Contact</h3>
          <Nav vertical className='footer__nav'/>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <Nav vertical className='footer__nav'/>
        </div>
      </div>
    </footer>
  )
}
