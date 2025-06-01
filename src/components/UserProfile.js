import { useLocation,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function UserProfile() {
  
    const { state } = useLocation();
    const {user}=state;
    // console.log(useLocation());33
    const navigate = useNavigate();

    const  handleEditclick = () => {
      navigate('/edit', { state: { user } });
      console.log("onclick user:",user);
    }
    
  return (
    <div>
      <h2>User Profile</h2>
      {/* <button onClick={handleEditclick} >Edit</button> */}
      <Button variant="light" onClick={handleEditclick} >Edit</Button>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Gender:</strong> {user.gender}</p> 
      <p><strong>City:</strong> {user.address.city}</p>
      <p><strong>State:</strong> {user.address.state}</p>
      <p><strong>ID:</strong> {user.id}</p> 
            
    </div>
  )
}

export default UserProfile











// let profileConfig = [
    //   { id: 1, label: "Name", key:"name",  },
    //   { id:2, label: "Email", key:"email"}
    // ]

    // profileConfig.map((conf)=> {
    //  return <p><strong>{conf.label}</strong>{user.name}</p>
    // })
