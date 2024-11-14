import React from 'react'
import './TestimonialsCard.css'
import Stars from '../Stars/Stars'

const TestimonialsCard = () => {
  return (
    <div className='card--testimonials' aria-label='Testimonaials Card'>
        <div className='card--testimonials__header'>
            <img src='https://via.placeholder.com/40x40' alt='avatar' />
            <div className='card--testimonials__header__text'>
                <h2>John Doe</h2>
                <h4>CEO at Company</h4>
            </div>
        </div>
        <div className='card--testimonials__content'>
            <p>This is a social media post  💡✨  I’m thrilled to share this newly updated wireframe kit with you all! 👩🏻‍💻 </p>
        </div>
        <hr className='card--testimonials__divider'/>
        <Stars rating={2} />
    </div>
  )
}

export default TestimonialsCard