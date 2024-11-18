import React from 'react'
import { Link } from 'react-router-dom';

const User = ({user}) => {
  return (
    <div style={{backgroundColor: "lightblue", padding: 4, margin: 3}}>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to={"/user/" + user.id}>View Details</Link>
    </div>
  )
}

export default User;
