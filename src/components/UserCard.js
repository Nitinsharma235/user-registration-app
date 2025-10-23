import {Card, Row, Col} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; // person logo
const UserCard = ({user}) => {  

  return (
        
     <Card  border="success"  bg="light">
        <Row className="align-items-center">
        {/* Person Icon */}
        <Col xs="auto">
          <FaUser size={28} className="text-dark" />
        </Col>
        <Card.Body>
          <Card.Text> Name:{user.name}</Card.Text>
          <Card.Text>ID Number: {user.id}</Card.Text>
        </Card.Body>
        </Row>
      </Card>
  )
}

export default UserCard
