import React from 'react'

function UserList({userData}) {
  return (
    <div>
      {userData.map((user) => {
        return ( <p>{user.name}</p> )
      })}
    </div>
  )
}

export default UserList
