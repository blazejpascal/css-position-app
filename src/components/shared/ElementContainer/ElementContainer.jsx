import React, {Component} from 'react'

import Circle from '../circle/Circle';
import Square from '../Square/Square';
import Triangle from '../Triangle/Triangle';

import "./ElementContainer.scss"
import SettingWindow from '../SettingsWindow/SettingWindow';

class ElementContainer extends Component {
  state = {
    styles: {
      elementContainer: {
        boxShadow: 'none',
      },
      square: {
        boxShadow: 'none',
      },
      triangle: {
        boxShadow: 'none',
      },
      circle: {
        boxShadow: 'none',
      },
    },
    modalVisible: true
  }

  handleElementChoosing = (e) => {
    const {className} = e.target
    const isShadowApply = (this.state.styles[className].boxShadow === 'none') ? '2px 2px peru' : 'none'
    const updateState = {...this.state.styles, [className]: {boxShadow: isShadowApply}}
    this.setState({styles: updateState})
  }

  handleClick = (e) => {
    this.handleElementChoosing(e)
  }

  

  render() {
    const { styles } = this.state
    return (
      <>
        <div className="elementContainer" onClick={this.handleClick} style={styles.elementContainer}>
          <Circle onClick={this.handleClick} style={styles} />
          <Square onClick={this.handleClick} style={styles} />
          <Triangle onClick={this.handleClick} style={styles} />
          
          
        </div>
        {
            this.state.modalVisible && <SettingWindow />
        }
      </>
      )
  } 
}

export default ElementContainer
