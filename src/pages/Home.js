import UserList from '../components/UserList'
import { useEffect, useState, useRef } from "react";

function Home() {
  const [userData, setUserData] = useState([]);
  //const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef('');
  const userListRef = useRef();
  
  const prevSearched = useRef(userData);
  const prevSearchText = useRef('');
  
  useEffect(() => {
    // Fetch data from localStorage when component mounts
     const storedUsers = JSON.parse(localStorage.getItem("userData"));
     setUserData(storedUsers);
     userListRef.current.setfilteredData(storedUsers);
  }, []);

  function filterData(){

    if (
      searchRef.current.value.length === 0 || prevSearchText.current.length===0
      || searchRef.current.value.length < prevSearchText.current.length
    ) {
      prevSearched.current = userData;
    }

    console.log("value filtered from: ",prevSearched.current);
    // Filter the previous filtered data
    const newFiltered = prevSearched.current.filter(user =>
      user.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );

    // Update refs
    prevSearched.current = newFiltered;
    prevSearchText.current = searchRef.current.value;

    userListRef.current.setfilteredData(newFiltered);
  }

  console.log("home page",userData);

  return (
    <div>
      <strong> Search Name: </strong>{' '}
      <input type="text" placeholder='search here' ref={searchRef} onChange={filterData}></input>
      <UserList userData={userData}  ref={userListRef} />
    </div>
  )
}

export default Home




























  // function filterData(){
  //   return userData.filter((e) => {
  //     return e.name.toLowerCase().includes(searchInput.toLowerCase());
  //   });
  // }
