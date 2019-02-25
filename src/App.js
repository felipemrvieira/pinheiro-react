import React, { Component } from 'react';
import './App.scss';

import Header from './components/template/Header';
import Nav from './components/template/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
