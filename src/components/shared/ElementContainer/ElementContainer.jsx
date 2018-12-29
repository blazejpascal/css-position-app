import React, {Component} from 'react'

import Circle from '../circle/Circle';
import Square from '../Square/Square';
import Triangle from '../Triangle/Triangle';
import BigSquare from '../BigSquare/BigSquare'

import'./ElementContainer.scss'

class ElementContainer extends Component {

  state = {
    bigSquareSelected: false,
    circleSelected: false,
    triangleSelected: false,
    squareSelected: false,
  }

  handleElementChoosing = (e) => {
    const selectedElement = e.target.className.split(' ')[0]
    const updatePropName = `${selectedElement}Selected`
    console.log(updatePropName)
    this.setState({ 
        [updatePropName]: !this.state[updatePropName]
    })
  }

handleClick = (e) => {
  this.handleElementChoosing(e)
}
  render() {
    const { 
      bigSquareSelected,
      circleSelected,
      triangleSelected,
      squareSelected 
    } = this.state

    return (
      <BigSquare onClick={this.handleClick} isSelected={bigSquareSelected} >
        <Circle onClick={this.handleClick} isSelected={circleSelected} />
        <Square onClick={this.handleClick} isSelected={squareSelected} />
        <Triangle onClick={this.handleClick} isSelected={triangleSelected} />
      </BigSquare>
    )
  } 
}

export default ElementContainer
