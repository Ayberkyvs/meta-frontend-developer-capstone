import React from 'react'
import mainLogo from "../../../assets/mainLogo.jpg"
import "./Header.css"
import Nav from '../../ui/Nav/Nav'
import Hamburger from '../../ui/Hamburger/Hamburger'
import { Link } from 'react-router-dom'

export default function Header() {
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
    <header id='header' className={`grid ${isScrolled && "header--shadow"}`}>
      <Link to="/" role='link'><img src={mainLogo} alt='Little Lemon Logo'/></Link>
      <Hamburger />
      <Nav />
    </header>
  )
}
