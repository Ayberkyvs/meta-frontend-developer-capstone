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
      <div className='footer__copyright'>
        <p>© 2024 - <a href='https://www.ayberkyavas.com' target='_blank'>Ayberk Yavas</a> - <a href='https://www.coursera.org/learn/meta-front-end-developer-capstone/' target='_blank'>Meta Frontend Dev Capstone</a></p>
      </div>
    </footer>
  )
}
