import React, {Component} from 'react'

import ElementContainer from '../ElementContainer/ElementContainer';
import SettingWindow from '../SettingsWindow/SettingWindow';

import "./ContainerWithSettings.scss"

class ContainerWithSettings extends Component {
    state = {
      settingsVisible: true,
      selectedElements: [],
      selectValue: 'static'

    }

    

    // handlePositionChange = () => {
    //   if(this.state.selectValue) {
    //   const {styles, selectedElements, selectValue} = this.state
    //   const updatedPosition = Object.keys(styles).map(item => (styles[item] === selectedElements.map(item => item)) )
    //   console.log(updatedPosition, selectValue)
    // } else {
    //   console.log('elo')
    // }
    // }

    handleSelectChange = (e) => {
      const { value } = e.target
      this.setState({selectValue: value})

      this.handlePositionChange()
    }
  
    
   
    render() {
      const { styles, settingsVisible, selectedElements } = this.state
      return (
        <div className="containerWithSettings">
            <ElementContainer onClick={this.handleClick} selectedElements={selectedElements}/>
            {
                settingsVisible && <SettingWindow 
                                      handleChange={this.handleSelectChange} 
                                      isElementSelected={this.state.isElementSelected} 
                                      />
            }
        </div>
      )
    } 
  }

  export default ContainerWithSettings