const UserCard = ({user}) => {  

  return (
        
    <div className="user-card" >
      
      <span>Name  :{user.name}</span><br/>
      <span>ID Number :{user.id}</span><br/>
    </div>
  )
}

export default UserCard
