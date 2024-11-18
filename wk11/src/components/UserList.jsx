import React, { Component } from 'react'
import axios from 'axios'
import User from './User';

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    getUsers = async () => {
        const usersUrl = "http://jsonplaceholder.typicode.com/users";
        try {
            const usersReponse = await axios.get(usersUrl);
            return usersReponse.data;
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount = () => {
        this.getUsers().then(data => {
            this.setState({users: data});
            console.log(this.state);
        });
    }
  
    render() {
        return (
        <div>
            <h3>UserList</h3>
            {
                this.state.users.map(user => <User user={user} />)
            }
        </div>
        )
    }
}
