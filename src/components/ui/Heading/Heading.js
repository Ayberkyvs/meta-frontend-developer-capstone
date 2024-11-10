import React from 'react'
import './Heading.css'
export default function Heading({title, subtitle, variant=""}) {
  return (
    <div className='heading'>
        <h1 className={`heading__title ${variant === "section" ? "heading__title--section" : ""}`}>{title}</h1>
        {subtitle && <h3 className='heading__subtitle'>{subtitle}</h3>}
    </div>
  )
}
