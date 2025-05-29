import {  useState, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";


const UserList = forwardRef((props, ref) => {
  const [filteredData,setfilteredData] = useState([]);
  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => (
    {
      setfilteredData: setfilteredData
    }
  ));
  
  const navigate = useNavigate();

  console.log("userList re-rendered",filteredData);
   
  
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
});

export default UserList;  





















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
