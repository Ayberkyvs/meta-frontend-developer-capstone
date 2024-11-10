import React from 'react'
import './Badge.css'
const Badge = ({ children="Badge", className=null }) => {
  return (
    <div className={`badge ${className}`}>
        <span>{children}</span>
    </div>
  )
}

export default Badge