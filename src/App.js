import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const isClientOrServer = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Is my application rendered by server or client?
        </p>
        <h2><code>{isClientOrServer()}</code></h2>
      </div>
    );
  }
}

export default App;
