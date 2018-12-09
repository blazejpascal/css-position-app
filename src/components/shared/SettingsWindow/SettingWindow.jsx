import React from 'react'

const positionProperties = ['static', 'absolute', 'relative', 'sticky', 'fixed'];

const SettingWindow = () => {
  return (
    <div className="settingWindow">
        <h1>Change properties</h1>

        <select>
            {positionProperties.map((item) => <option key={item.id} label={item}>{item}</option> )}
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
