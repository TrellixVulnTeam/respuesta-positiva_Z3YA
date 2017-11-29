import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a Respuesta Positiva</h1>
        </header>
        <p className="App-intro">
          Esto es un codigo de prueba
        </p>
      </div>
    );
  }
}

export default App;
