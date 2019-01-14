import React from 'react'
import classNames from 'classnames'

import './BigSquare.scss'

const BigSquare = ({handleClick, children, isSelected, position}) => {

  const updatePosition = isSelected ? position : ''
  const styles = classNames({
    'bigSquare': true,
    'bigSquare--selected': isSelected,
    [`bigSquare--${updatePosition}`]: updatePosition,
    
 })  

  return (
    <div className={styles} onClick={handleClick} >
      {children}
    </div>
  )
}

export default BigSquare
