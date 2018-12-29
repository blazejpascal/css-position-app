import React, { Component } from 'react';
import './App.scss';

import ContainerWithSettings from './components/shared/ContainerWithSettings/ContainerWithSettings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerWithSettings />
      </div>
    );
  }
}

export default App;



