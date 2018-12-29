import React from 'react'
import classNames from 'classnames'

import "./Square.scss"

const Square = ({onClick, isSelected}) => {
  const styles = classNames({
    'square--selected' : isSelected,
 })  
  return (
      <div className={`square ${styles}`}  onClick={onClick}>
      
    </div>
  )
}

export default Square
