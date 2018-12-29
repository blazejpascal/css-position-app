import React from 'react'

const positionProperties = ['static', 'absolute', 'relative', 'sticky', 'fixed'];

const SettingWindow = (props) => {
  return (
    <div className="settingWindow">
        {   props.isElementSelected ?
            <h1>Change properties</h1>
            :
            <h1>Select element</h1>
        }    
        <select onChange={props.handleChange}>
            {positionProperties.map((item) => <option key={item} label={item}>{item}</option> )}
        </select>
        <div>
            <span>Choose Color</span>
            <input type="text" name="color"></input>
        </div>
        <div>
            <span>Choose Location</span>
            <input type="number" name="top"></input>
            <input type="number" name="bottom"></input>
            <input type="number" name="left"></input>
            <input type="number" name="right"></input>
        </div>
    </div>
  )
}

export default SettingWindow
