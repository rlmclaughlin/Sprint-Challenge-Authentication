import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  signOut = () => {
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div>
        <h1>Dad Jokes</h1>
        <nav className='nav-font'>
            <Link to='/'>Home</Link>
            <br/> 
            <Link to='/signUp'>Sign Up</Link>
            <br/>
            <Link to='/signIn'>Sign In</Link>
            <br/>
            <Link to='/jokes'>jokes</Link>
            <br/> 
            <button onClick={this.signOut}>Sign Out</button>
        </nav>
      </div>
    );
  }
}

export default Home;