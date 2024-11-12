import React from 'react'
import './Button.css'

export default function Button({children="Button", variant="active", className=null, disabled=false}) {
  return variant === "fluid"
  ? <button className={`button button--fluid ${className}`} disabled={disabled}>{children}</button>
  : <button className={`button ${className}`} disabled={disabled}>{children}</button>
}

