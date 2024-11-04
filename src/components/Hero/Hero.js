import React from 'react'
import './Hero.css'
import Heading from '../ui/Heading/Heading'
import Button from '../ui/Button/Button'
export default function Hero() {
  return (
    <section id='hero-section'>
        <div id='inner-hero' className='grid'>
          <div id='hero-text'>
            <Heading title="Little Lemon" subtitle="Chicago"/>
            <p>Lorem ipsum dolor sit amet consectetur. Fringilla morbi facilisi sed ut habitasse mattis in ac. Id nulla.</p>
            <Button />
          </div>
          <div>
            
          </div>
        </div>
    </section>
  )
}
