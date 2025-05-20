const UserCard = ({user}) => {  

  return (
        
    <div className="user-card" >
      
      <span>Name  :{user.name}</span><br/>
      <span>Gender :{user.gender}</span><br/>
    </div>
  )
}

export default UserCard
