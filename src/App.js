import React, { Component } from 'react';
import MessageList from './MessageList'
import InputBox from './InputBox'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h2>Syncing state with&nbsp;
            <a href="https://facebook.github.io/react/">React</a> and&nbsp;
            <a href="https://firebase.google.com/">Firebase</a> using&nbsp;
            <a href="https://github.com/tylermcginnis/re-base">re&#8209;base</a>
          </h2>
          <h4>By  <a href="https://github.com/jtegtmeier">Jacob Tegtmier</a></h4>
        </div>
        <MessageList></MessageList>
        <InputBox></InputBox>
      </div>
    );
  }
}

export default App;
