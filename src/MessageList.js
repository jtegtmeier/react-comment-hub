import React, {Component} from 'react'
import Rebase from 're-base'
import RandomColor from 'randomcolor'

var base = Rebase.createClass({
    apiKey: "AIzaSyCRoDGDG1jtipXaSCHNC5qoMwV5UCZ-MIA",
    authDomain: "react-comment-hub.firebaseapp.com",
    databaseURL: "https://react-comment-hub.firebaseio.com",
    storageBucket: "react-comment-hub.appspot.com",
    messagingSenderId: "490814626926"
})

class MessageList extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    this.ref = base.syncState('messages', {
      context: this,
      state: 'messages',
      asArray: true
    })
  }

  componentDidUpdate() {
    this.scrollToEnd()
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  scrollToEnd(){
    this.messageContainer.scrollTop = this.messageContainer.scrollHeight
  }

  render() {
    return(
      <div className="messages-container" ref={(div) => this.messageContainer = div}>
        {this.state.messages.map((message, index) =>
          <div key={index} className="message-line">
            <span className="user-name"
              style={{color: RandomColor({luminosity: 'dark', seed: message.user})}}>
                {message.user + ": "}
            </span>
            <span className="comment-text">{message.comment}</span>
          </div>
        )}
      </div>
    )
  }
}

export default MessageList
