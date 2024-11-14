import React from 'react'
import './Button.css'

export default function Button({children="Button", variant="active", className=null, disabled=false, role="button", type="button"}) {
  return variant === "fluid"
  ? <button className={`button button--fluid ${className}`} disabled={disabled} role={`${role && role}`} type={`${type && type}`}>{children}</button>
  : <button className={`button ${className}`} disabled={disabled} role={`${role && role}`} type={`${type && type}`}>{children}</button>
}

