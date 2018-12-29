import React from 'react'
import classNames from 'classnames'

import "./Triangle.scss"

const Triangle= ({onClick, isSelected}) => {
  const styles = classNames({
    'triangle--selected' : isSelected,
 })  
 
  return (
    <div className={`triangle ${styles}`} onClick={onClick}>
      
    </div>
  )
}

export default Triangle