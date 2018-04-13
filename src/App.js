import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';

class App extends Component {
  render() {
    const logo = 'Agile-App';
    return (
      <div className="container">
        <NavBar logo={logo}/>
        <Home />
      </div>
    );
  }
}

export default App;
