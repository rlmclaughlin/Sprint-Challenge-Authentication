import React from 'react-router-dom'

export default class Jokes extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getJokes()
    }

    render(){
        return(
            <ul>
              {this.props.users.map(user => (
                <li key={user.id}>{user.jokes}</li>
              ))}
            </ul>
        )
    }
}