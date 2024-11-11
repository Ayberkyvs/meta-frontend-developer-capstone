import React from 'react'
import mainLogo from "../../assets/mainLogo.jpg"
import "./Header.css"
import Nav from '../Nav/Nav'
import Hamburger from '../ui/Hamburger/Hamburger'

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
      <img src={mainLogo} alt='Little Lemon Logo'/>
      <Hamburger />
      <Nav />
    </header>
  )
}
