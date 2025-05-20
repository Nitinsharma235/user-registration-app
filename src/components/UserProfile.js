import { useLocation } from 'react-router-dom';
function UserProfile() {
  
    const { state } = useLocation();
    const {user}=state;
    console.log(useLocation());
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Gender:</strong> {user.gender}</p> 
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>ID:</strong> {user.id}</p> 
            
    </div>
  )
}

export default UserProfile
