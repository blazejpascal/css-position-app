import React from 'react'

import "./Circle.scss"

const Circle = ({onClick, style: {circle}}) => {
  return (
    <div className="circle" onClick={onClick} style={circle}>
      
    </div>
  )
}

export default Circle
