import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import SignIn from './Auth/signIn.js'
import SignUp from './Auth/signUp.js'
import Jokes from './Jokes/jokes.js'
import './App.css';


class App extends Component {

  addNewUser = user => {
    axios.post('http://localhost:3300/api/register', user)
      .then(res => {
        console.log('user has been added');
      })
      .catch(err => {
        console.log(err);
      });
  }

  logIn = user => {
    axios.post('http://localhost:3300/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getJokes = () => {
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        auth: token
      }
    }
    axios.get('http://localhost:3300/api/jokes', options)
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <Route path='/' component={Home} />
          <Route path='/signUp' render={props => <SignUp {...props} addNewUser={this.addNewUser} />} />
          <Route path='/signIn' render={props => <SignIn {...props} logIn={this.logIn} />} />
          <Route path='/jokes' render={props => <Jokes {...props} getJokes={this.getJokes} jokes={this.state.users} />} />
        </div>
      </div>
    );
  }
}

export default App;
