import React, { Component } from 'react';
import './App.scss';
import ElementContainer from './components/shared/ElementContainer/ElementContainer';


class App extends Component {

  render() {
    return (
      <div className="App">
         <ElementContainer />
         <ElementContainer />
         <ElementContainer />
      </div>
    );
  }
}

export default App;
