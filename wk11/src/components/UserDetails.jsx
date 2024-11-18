import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import User from './User';

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [userLoaded, setUserLoaded] = useState(false);
    const {userId} = useParams();
    const getUserData = async () => {
        const response = await axios.get("http://jsonplaceholder.typicode.com/users/" + userId);
        setUser(response.data);
    }
    useEffect(() => {
      getUserData().then(() => {
        setUserLoaded(true);
      });
    }, [])
  return (
    userLoaded ? <User user={user} /> : <p>Loading...</p>
  )
}

export default UserDetails