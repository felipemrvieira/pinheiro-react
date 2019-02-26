import React, { Component } from 'react';
import './App.scss';

import { HashRouter } from 'react-router-dom'
import Routes from './Routes'

import Header from './components/template/Header';
import Nav from './components/template/Nav';
import Footer from './components/template/Footer';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
