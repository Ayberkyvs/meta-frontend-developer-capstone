import React from 'react'
import './Button.css'

export default function Button({children="Button", variant="active", className=null}) {
  return variant === "fluid"
  ? <button className={`button button--fluid ${className}`}>{children}</button>
  : <button className={`button ${className}`}>{children}</button>
}

