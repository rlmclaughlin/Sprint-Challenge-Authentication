import React from 'react'
import axios from 'axios'

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    registerUser = ( newUser) =>{
      axios.post('http://localhost:3300/api/register', newUser)
        .then(res =>{
          console.log(res.data);
          localStorage.setItem('jwt', res.data.token);
        })
        .catch(err =>{ console.log('Failed to add new user');
        })
    }

    inputHandler = (event)  =>{
      this.setState({
        [event.target.name] : event.target.value})
    }

    submitHandler = (event) =>{
        event.preventDefault();
        this.registerUser(this.state);
        this.setState({
            username: '',
            password: ''
        });
        this.props.history.push('/');  
    }

    render(){
        return(
          <div> 
            <h1>Dad Joke Registration</h1>
             <form >
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
                <button onClick = {this.submitHandler}>Create User</button>
             </form>
           </div> 
        )
    }
}