import Card from 'react-bootstrap/Card';
const UserCard = ({user}) => {  

  return (
        
    // <div className="user-card" >
      
    //   <span>Name  :{user.name}</span><br/>
    //   <span>ID Number :{user.id}</span><br/>
    // </div>

    // <Card>
    //   <Card.Body>
    //     <Card.Title>Name:</Card.Title><Card.Text>{user.name}</Card.Text>
    //     <Card.Title>ID Number:</Card.Title><Card.Text>{user.id}</Card.Text>
    //   </Card.Body>
    // </Card>
     <Card  border="info" >
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Text> Name:{user.name}</Card.Text>
          <Card.Text> ID Numbeer:{user.id}</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default UserCard
