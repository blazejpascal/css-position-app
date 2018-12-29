import React from 'react'
import classNames from 'classnames'

import "./Circle.scss"

const Circle = ({onClick, isSelected}) => {
const styles = classNames({
    'circle': true,
    'circle--selected' : isSelected,
})  

return (
    <div className={styles} onClick={onClick}>
      
    </div>
  )
}

export default Circle
