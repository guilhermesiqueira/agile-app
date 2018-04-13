import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';

class App extends Component {
  render() {
    const logo = 'Agile-App';
    return (
      <div className="container">
        <NavBar logo={logo}/>
      </div>
    );
  }
}

export default App;
