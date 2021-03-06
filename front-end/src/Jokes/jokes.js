import React from 'react'
import axios from 'axios';

export default class Jokes extends React.Component {
  constructor(){
    super(); 
    this.state = {
        jokes: []
    }
  }

  getJokes = () =>{
    const token = localStorage.getItem('jwt');
    const headers ={
      headers: {
        'Authorization': token
      }
    }

    axios.get('http://localhost:3300/api/jokes', headers)
      .then(res =>{
        this.setState({
          jokes: res.data
        })
        console.log(res)
        })
        .catch(err =>{console.log('Unable to get jokes');
        })
    }

    componentDidMount() {
      this.getJokes()
    }

    render(){
      return(
        <div>
          <h2> Your Dad Jokes: </h2> 
          {this.state.jokes.map(joke =>{
            return (
              <p key={joke.id}>{joke.joke} <br/> <br/> </p>
            )
          })}
        </div>
      )
    }
}