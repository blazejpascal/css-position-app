import React from 'react'

import "./Square.scss"

const Square = ({onClick, style: {square}}) => {
  return (
    <div className="square" onClick={onClick} style={square}>
      
    </div>
  )
}

export default Square
