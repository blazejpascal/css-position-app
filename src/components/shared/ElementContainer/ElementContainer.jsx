import React, {Component} from 'react'

import Circle from '../circle/Circle';
import Square from '../Square/Square';
import Triangle from '../Triangle/Triangle';
import BigSquare from '../BigSquare/BigSquare'

import'./ElementContainer.scss'

class ElementContainer extends Component {

  state = {
    bigSquare: { 
      isSelected: false,
      position: ''
    },
    circle: { 
      isSelected: false,
      position: ''
    },
    triangle:{
       isSelected: false,
       position: ''
      },
    square:{
       isSelected: false,
       position: ''
      },
  }

  componentDidUpdate(prevProps) {
    if( prevProps.position !== this.props.position) {
      const upddatedPosition = this.props.position
      this.handlePositionChange(upddatedPosition)
      console.log('elo')
    }
  }

  handleElementChoosing = (e) => {
    const selectedElement = e.target.className.split(' ')[0]
    let updatedState = {
        ...this.state[selectedElement],
        isSelected: !this.state[selectedElement].isSelected
      }
    this.setState({ 
        [selectedElement]: updatedState
    })
  }

  handleClick = (e) => {
    this.handleElementChoosing(e)
  }

  handlePositionChange = (position) => {
    const selectedElements = Object.keys(this.state).filter(item => item !== 'position').filter(item => this.state[item].isSelected !== false )
    const updatedPositions = selectedElements.map(item => ({[item]: {
      ...this.state[item],
      position: position,
    }}))
    const updatedState = Object.assign({}, ...updatedPositions)

    console.log(updatedState)
    this.setState({
     ...updatedState
    })
  }
  
  render() {
    const {
      bigSquare,
      circle,
      triangle,
      square
    } = this.state
    
    return (
      <BigSquare handleClick={this.handleClick} isSelected={bigSquare.isSelected} position={bigSquare.position} >
        <Circle handleClick={this.handleClick} isSelected={circle.isSelected} position={circle.position}  />
        <Square handleClick={this.handleClick} isSelected={square.isSelected} position={circle.position} />
        <Triangle handleClick={this.handleClick} isSelected={triangle.isSelected} position={circle.position} />
      </BigSquare>
    )
  } 
}

export default ElementContainer
