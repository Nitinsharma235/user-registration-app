import React from 'react'
import UserList from '../components/UserList'

function Home({userData}) {
  return (
    <div>
      <UserList userData={userData}/>
    </div>
  )
}

export default Home
