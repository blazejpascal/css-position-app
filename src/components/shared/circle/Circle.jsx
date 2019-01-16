import React from 'react'
import classNames from 'classnames'

import "./Circle.scss"

const Circle = ({handleClick, isSelected, position}) => {

let updatePosition = isSelected ? position : ''
const styles = classNames({
    'circle': true,
    'circle--selected' : isSelected,
    [`circle--${updatePosition}`]: updatePosition,
})  

return (
    <div className={styles} onClick={handleClick}>
      
    </div>
  )
}

export default Circle
