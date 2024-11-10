import React from 'react'
import mainLogo from "../../assets/mainLogo.jpg"
import "./Header.css"
import Nav from '../Nav/Nav'
export default function Header() {
  return (
    <header id='header' className='grid'>
      <img src={mainLogo} alt='Little Lemon Logo'/>
      <Nav />
    </header>
  )
}
