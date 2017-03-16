import React, {Component} from 'react'

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    
  }

  addMessage(evt){

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
          <textarea ref="message" onKeyUp={this.addMessage} placeholder="Type and hit enter..."/>
        </div>
      </div>
    )
  }
}

export default UserInput
