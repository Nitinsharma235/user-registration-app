import React from 'react'
import { useParams } from 'react-router-dom'

function UserProfile({userData}) {
    const {id}=useParams()
    const user = userData.find(u => u.id === id);

  return (
    <div>
    <h2>User Profile</h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Address:</strong> {user.address}</p>
            
    </div>
  )
}

export default UserProfile
