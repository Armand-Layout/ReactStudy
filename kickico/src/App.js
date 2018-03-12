import React, { Component } from 'react';
import './App.css';

import Heading from './component/heading/heading';
import Main from './component/main/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Main />
      </div>
    );
  }
}

export default App;
