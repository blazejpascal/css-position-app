import React from 'react'
import classNames from 'classnames'

import './BigSquare.scss'

const BigSquare = ({onClick, children, isSelected}) => {
  const styles = classNames({
    'bigSquare': true,
    'bigSquare--selected': isSelected,
    
 })  

  return (
    <div className={styles} onClick={onClick} >
      {children}
    </div>
  )
}

export default BigSquare
