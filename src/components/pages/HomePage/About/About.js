import React from 'react'
import './About.css'
import Heading from '../../../ui/Heading/Heading'

const About = () => {
  return (
    <section id='about' className='grid'>
      <div id='about__text'>
        <Heading title="Little Lemon" subtitle="Chicago"/>
        <p>
          Lorem ipsum dolor sit amet consectetur.
          Eget euismod maecenas ultrices egestas aliquam.
          Sed gravida malesuada enim adipiscing sed neque eleifend semper.
          Accumsan auctor ac a justo tristique.
          Sapien in auctor augue dui at enim volutpat dapibus.
          Faucibus duis varius urna integer orci adipiscing.
          Libero aliquam at praesent ornare. Vel arcu sed cursus libero.
          Convallis vel suspendisse nibh nunc diam mi nec auctor.
          Convallis ridiculus pellentesque aliquam aliquet a augue imperdiet ac cras.
        </p>
      </div>
      <div id='about__photos'>
        <img src='https://via.placeholder.com/239x244'/>
        <img src='https://via.placeholder.com/239x244'/>
      </div>
    </section>
  )
}

export default About