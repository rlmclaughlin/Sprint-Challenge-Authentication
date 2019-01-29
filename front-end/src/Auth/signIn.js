import React from 'react'
import axios from 'axios'

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          password: ''
        }
    }

    loginUser = ( userCreds) =>{
      axios.post('http://localhost:3300/api/login', userCreds)
        .then(res =>{
          console.log(res.data);
          localStorage.setItem('jwtKey', res.data.token);
          })
          .catch(err =>{console.log('Failed to add new user');
          })
    }

    inputHandler = e => {
      this.setState({
        [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.loginUser(this.state);
        this.setState({
            username: '',
            password: ''
        });
        this.props.history.push('/');
    } 

    render(){
        return(
          <form onSubmit={this.submitHandler}>
            <h2> Dad Joke Sign In </h2>
             <h3> Username:</h3>
               <input 
                 name = 'username'
                 value = {this.state.username}
                 onChange = {this.inputHandler}
                 type = 'text'
                />
                <h3>Password:</h3>
                <input
                  name = 'password'
                  value = {this.state.password}
                  onChange = {this.inputHandler}
                  type = 'text'
                 />
                <button onClick = {this.submitHandler}>Submit Login</button>
          </form>
        )
    }
}