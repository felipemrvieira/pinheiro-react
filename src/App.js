import React, { Component } from 'react';
import './App.scss';

import Header from './components/template/Header';
import Nav from './components/template/Nav';
import Main from './components/template/Main';
import Footer from './components/template/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main />
        <Footer />
       
      </div>
    );
  }
}

export default App;
