import React from 'react'
import mainLogo from "../../../assets/mainLogo.jpg"
import "./Header.css"
import Nav from '../../ui/Nav/Nav'
import Hamburger from '../../ui/Hamburger/Hamburger'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id='header' className={`grid ${isScrolled && "header--shadow"}`} aria-label='header'>
      <Link to="/" role='link' onClick={()=> {setOpen(false); window.scroll(0,0)}}><img src={mainLogo} alt='Little Lemon Logo'/></Link>
      <Hamburger open={open} setOpen={setOpen}/>
      <Nav />
    </header>
  )
}
