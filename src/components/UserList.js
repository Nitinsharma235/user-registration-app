import React from 'react'
import { Link } from 'react-router-dom'
function UserList({userData}) {
  return (
    <div>
      {userData.map((user) => {
        return ( <div><Link to={`/user/${user.id}`}>{user.name}</Link> </div>      
        )
      })}
    </div>
  )
}

export default UserList
