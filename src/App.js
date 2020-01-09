import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat/chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Chat/>
    </div>
  );
}

export default App;
