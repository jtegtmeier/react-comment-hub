import React, {Component} from 'react'
import Rebase from 're-base'

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
    console.log(this.state)
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render() {
    return(
      <div className="messagesContainer">
        {this.state.messages.map((message, index) =>
          <div key={index} className="messageLine">
            <span className="userName">{message.user + ": "}</span>
            <span className="commentText">{message.comment}</span>
          </div>
        )}
      </div>
    )
  }
}

export default MessageList
