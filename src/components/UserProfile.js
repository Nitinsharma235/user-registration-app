import { useLocation,useNavigate } from 'react-router-dom';
import {Button, Container } from 'react-bootstrap';
function UserProfile() {
  
    const { state } = useLocation();
    const {user}=state;
    // console.log(useLocation());
    const navigate = useNavigate();

    const  handleEditclick = () => {
      navigate('/edit', { state: { user } });
      console.log("onclick user:",user);
    }
    
  return (
    
    <Container className="d-flex justify-content-center mt-4" style={{backgroundColor:'rgb(224, 239, 227)'}}>
      <div className="p-4 border rounded shadow text-center" style={{ maxWidth: '500px', width: '100%' }}>
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>State:</strong> {user.address.state}</p>
        <p><strong>ID:</strong> {user.id}</p>
        <Button variant="success" onClick={handleEditclick}>Edit</Button>
      </div>
    </Container>
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
