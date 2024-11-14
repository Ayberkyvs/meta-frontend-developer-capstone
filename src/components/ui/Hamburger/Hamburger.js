import React from 'react'
import './Hamburger.css'
import { FaXmark, FaBarsStaggered } from 'react-icons/fa6';
import Nav from '../Nav/Nav';

const Hamburger = ({open, setOpen}) => {

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

  return (
    <>
    <div onClick={() => setOpen(prev => !prev)} id='hamburger' role='button'>
        {open ? <FaXmark /> : <FaBarsStaggered />}
    </div>
    {open && <div id='hamburger__menu'>
        <Nav vertical className='hamburger__menu__nav' setOpen={setOpen}/>
    </div>}
    </>
  )
}

export default Hamburger