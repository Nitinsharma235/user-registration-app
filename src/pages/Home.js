import React from 'react'
import UserList from '../components/UserList'
import { useEffect, useState, useRef,useMemo } from "react";

function Home() {
  const [userData, setUserData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const searchRef = useRef();
  
  useEffect(() => {
    // Fetch data from localStorage when component mounts
     const storedUsers = JSON.parse(localStorage.getItem("userData"));
     setUserData(storedUsers);
  }, []);

  
console.log("useData",userData);

  return (
    <div>
      <strong> Search Name: </strong>{' '}
      <input type="text" placeholder='search here' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
      <UserList userData={userData} searchInput={searchInput}/>
    </div>
  )
}

export default Home




























  // function filterData(){
  //   return userData.filter((e) => {
  //     return e.name.toLowerCase().includes(searchInput.toLowerCase());
  //   });
  // }
