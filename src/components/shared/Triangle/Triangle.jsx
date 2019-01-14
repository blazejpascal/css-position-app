import React from 'react'
import classNames from 'classnames'

import "./Triangle.scss"

const Triangle= ({handleClick, isSelected, position}) => {

  const updatePosition = isSelected ? position : ''
  const styles = classNames({
    'triangle': true,
    'triangle--selected' : isSelected,
    [`triangle--${updatePosition}`]: updatePosition,
 })  

  return (
    <div className={styles} onClick={handleClick}>
      
    </div>
  )
}

export default Triangle