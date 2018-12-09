import React from 'react'

import "./Triangle.scss"

const Triangle= ({onClick, style: {triangle}}) => {
  return (
    <div className="triangle" onClick={onClick} style={triangle}>
      
    </div>
  )
}

export default Triangle