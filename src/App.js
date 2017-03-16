import React, { Component } from 'react';
import MessageList from './MessageList'
import UserInput from './UserInput'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList></MessageList>
        <UserInput></UserInput>
      </div>
    );
  }
}

export default App;
