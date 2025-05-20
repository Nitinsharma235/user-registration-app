import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
function UserProfile() {
    // const {id}=useParams()
    // const user = userData.find(u => u.id === id);
    const { state } = useLocation();
    const {user1}=state;
    console.log(useLocation());
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>ID:</strong> {user1.id}</p> 
      <p><strong>Name:</strong> {user1.name}</p>
      <p><strong>Email:</strong> {user1.email}</p>
      <p><strong>Phone:</strong> {user1.phone}</p>
      <p><strong>Gender:</strong> {user1.gender}</p> 
      <p><strong>Address:</strong> {user1.address}</p>
            
    </div>
  )
}

export default UserProfile
