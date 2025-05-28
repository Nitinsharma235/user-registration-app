import { useEffect, useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import React from 'react';

function UserList({userData, searchInput}) {

const prevSearched = useRef(userData);
const prevSearchText = useRef('');

  
 console.log("userList re-rendered")
//  console.log("useData",userData);
  
  const navigate = useNavigate();
       
  // const filteredData = useMemo(() => {
  //  return userData.filter(user =>
  //   user.name.toLowerCase().includes(searchInput.toLowerCase()) );
  // }, [ userData, searchInput]);

  const filteredData = useMemo(() => {
    // Reset filtering if search is cleared or reduced
    if (
      searchInput.length === 0 ||
      searchInput.length < prevSearchText.current.length
    ) {
      prevSearched.current = userData;
    }

    // Filter the previous filtered data
    const newFiltered = prevSearched.current.filter(user =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Update refs
    prevSearched.current = newFiltered;
    prevSearchText.current = searchInput;

    return newFiltered;
  }, [userData, searchInput]);

   console.log("Filtered Data",filteredData)
  
  return (
    <div>
    
      <div className="user-list-container">
       {filteredData?.map((user) => (
          <div
            key={user.id}
            className="user-card-wrapper"
            onClick={() =>
              navigate(`/user/${user.id}`, {
                state: { user: user },
              })
            } 
          >
            <UserCard user={user}/>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default React.memo(UserList);





















  // function filterData(userData){
  //   return userData.filter((e) => {
  //     return e.name.toLowerCase().includes(searchInput.toLowerCase());
  //   });
  // }


  //  const filterData= userData.filter((e) => {
  //     return e.name.toLowerCase().includes(searchInput.toLowerCase());
  //   });



  // function UserList() {
  // const [userData, setUserData] = useState([]);
  //   const [searchInput, setSearchInput] = useState("");
  // // const [filterData, setFilteredData]= useState([]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Fetch data from localStorage when component mounts
  //   const storedUsers = JSON.parse(localStorage.getItem("userData"));
  //   setUserData(storedUsers);
  // }, []);
   
   

  //   useEffect(() => {
	// 	 const filtered= userData.filter((e) => {
  //     return e.name.toLowerCase().includes(searchInput.toLowerCase());
  //   });
	// 	setFilteredData(filtered);
	// }, [searchInput]);

//  const filterData= userData.filter((e) => {
//       return e.name.toLowerCase().includes(searchInput.toLowerCase());
//     });

//   console.log(userData)
 
//   return (
//     <div>
//      <strong>  Search Name:</strong>{' '}
//       <input type="text" placeholder='search here' value={searchInput} 
//        onChange={(e) => setSearchInput(e.target.value)}></input>
//       <div className="user-list-container">
//        {filterData.map((user) => (
//           <div
//             key={user.id}
//             className="user-card-wrapper"
//             onClick={() =>
//               navigate(`/user/${user.id}`, {
//                 state: { user: user },
//               })
//             }
//           >
//             <UserCard user={user}/>
//           </div>
//         ))
//       }
//       </div>
//     </div>
//   );
// }

// export default UserList;



// const handleSearch = (e) => {
  //   setSearchInput(e.target.value);
  //   const filteredData = userData.filter((e) => {
  //   return e.name.toLowerCase().includes(searchInput.toLowerCase());
  // });
  // setFilteredData(filteredData);
  // // if(!searchInput) setFilteredData(userData); 
  // }; 

  //  const filterData= userData.filter((e) => {
  //     return e.name.toLowerCase().includes(searchInput.toLowerCase());
  //   });
