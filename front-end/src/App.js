import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SignIn from './Auth/signIn'
import SignUp from './Auth/signUp'
import Jokes from './Jokes/jokes.js'
import Home from './home.js'
import './App.css';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Home} />
        <Route path='/signUp' render={props => <SignUp {...props} addNewUser={this.addNewUser} />} />
        <Route path='/signIn' render={props => <SignIn {...props} logIn={this.logIn} />} />
        <Route path='/jokes' render={props => <Jokes {...props}  />} />
      </div>
    );
  }
}

export default App;
