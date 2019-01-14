import React from 'react'
import classNames from 'classnames'

import "./Square.scss"

const Square = ({handleClick, isSelected , position}) => {

  const updatePosition = isSelected ? position : ''
  const styles = classNames({
    'square' : true,
    'square--selected' : isSelected,
    [`sqare--${updatePosition}`]: updatePosition,
 })  
  return (
      <div className={styles}  onClick={handleClick}>
      
    </div>
  )
}

export default Square
