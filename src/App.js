import React, { Component } from 'react';
import './App.scss';

import Header from './components/template/Header';
import Nav from './components/template/Nav';
import Main from './components/template/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
