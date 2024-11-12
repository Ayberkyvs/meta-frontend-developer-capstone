import React from 'react'
import './Hero.css'
import Heading from '../../../ui/Heading/Heading'
import Button from '../../../ui/Button/Button'
import HeroImage from "../../../../assets/photo_1.png"
export default function Hero() {
  return (
    <section id='hero' className='grid'>
      <div id='hero__text'>
        <Heading title="Little Lemon" subtitle="Chicago"/>
        <p>Lorem ipsum dolor sit amet consectetur. Fringilla morbi facilisi sed ut habitasse mattis in ac. Id nulla.</p>
        <Button>Learn More</Button>
      </div>
      <img id="hero__image" src={HeroImage} alt="Lemonade Stand" />
    </section>
  )
}
