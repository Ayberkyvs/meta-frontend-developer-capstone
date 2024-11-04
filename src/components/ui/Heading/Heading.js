import React from 'react'
import './Heading.css'
export default function Heading({title, subtitle}) {
  return (
    <div id='heading'>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
    </div>
  )
}
