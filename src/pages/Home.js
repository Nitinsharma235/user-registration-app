import React from 'react'
import UserList from '../components/UserList'

function Home({userData}) {
  return (
    <div>
      at Home
      <UserList userData={userData}/>
    </div>
  )
}

export default Home
