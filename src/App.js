import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    user : "",
    message : []
  }

  newMessage = (e) => {
    e.preventDefault();
    let msg = document.getElementById("input").value;
    let data = new Date()
    let hour = data.getHours();
    let minutes = data.getMinutes();
    let currentData = hour+":"+minutes;
    let msgData = {
      user: this.state.user,
      msg: msg,
      date: currentData
    }

    document.getElementById("input").value = "";
    this.setState( state => ({
      message : state.message.concat([msgData])
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat With React</h1>
        </header>
        
        <section>
          <div className="frame-message">
            {this.state.message.map(m => <li key="id" className="msg">{m.date +"-"+ m.msg}</li>)}
          </div>
          <div className="input-message">
                <form className="form-message" onSubmit={e => this.newMessage(e)} value={this.message}>
                    <input id="input" type="text" placeholder="Send Message" autoComplete="off" />
                </form>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
