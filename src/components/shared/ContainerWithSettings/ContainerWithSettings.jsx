import React, {Component} from 'react'

import ElementContainer from '../ElementContainer/ElementContainer';
import SettingWindow from '../SettingsWindow/SettingWindow';

import "./ContainerWithSettings.scss"

class ContainerWithSettings extends Component {
    state = {
      settingsVisible: true,
      position: ''
    }

    handleSelectChange = (e) => {
      const { value } = e.target
      this.setState({position: value})
    }

    render() {
      const { position, settingsVisible,} = this.state
      return (
        <div className="containerWithSettings">
            <ElementContainer position={position} />
            {
                settingsVisible && <SettingWindow 
                                      handleChange={this.handleSelectChange} 
                                      />
            }
        </div>
      )
    } 
  }

export default ContainerWithSettings
  