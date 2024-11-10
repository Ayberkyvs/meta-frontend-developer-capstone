import React from 'react'
import Heading from '../ui/Heading/Heading'
import './Testimonials.css'
import TestimonialsCard from '../ui/TestimonialsCard/TestimonialsCard'

const Testimonials = () => {
  return (
    <section id='testimonials' className='grid'>
        <div className='testimonials__heading'>
            <Heading title='Testimonials' variant='section'/>
        </div>
        <div className='testimonials__cards'>
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
        </div>
    </section>
  )
}

export default Testimonials