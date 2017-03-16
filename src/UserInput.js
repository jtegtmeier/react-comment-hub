import React, {Component} from 'react'
import Rebase from 're-base'

var base = Rebase.createClass({
    apiKey: "AIzaSyCRoDGDG1jtipXaSCHNC5qoMwV5UCZ-MIA",
    authDomain: "react-comment-hub.firebaseapp.com",
    databaseURL: "https://react-comment-hub.firebaseio.com",
    storageBucket: "react-comment-hub.appspot.com",
    messagingSenderId: "490814626926"
})


class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){

  }

  addMessage(evt){
    evt.preventDefault()

    if(evt.which === 13){
      base.push('messages', {
        data: {
          user: this.refs.user.value,
          comment: this.refs.comment.value.slice(0,-1)
        },
        context: this,
        then: () => {
          console.log('Posted from user: ', this.refs.user.value)
        }
      })
      this.refs.comment.value = ''
    }
  }

  render(){
    return(
      <div>
        <div>
          User:<br/>
          <input ref="user" placeholder="Enter a user name..."/>
        </div>
        <div>
          Message:<br/>
          <textarea ref="comment" onKeyUp={this.addMessage.bind(this)} placeholder="Type and hit enter..."/>
        </div>
      </div>
    )
  }
}

export default UserInput
