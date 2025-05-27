import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

function UserList() {
  const [userData, setUserData] = useState([]);
    const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from localStorage when component mounts
    const storedUsers = JSON.parse(localStorage.getItem("userData"));
    setUserData(storedUsers);
  }, []);
   function filterData(userData){
    return userData.filter((e) => {
      return e.name.toLowerCase().includes(input.toLowerCase());
    });
  }

 
  return (
    <div>
      Search Name:{' '}
      <input type="text" placeholder='search here' value={input} 
       onChange={(e) => setInput(e.target.value)}></input>
     <div className="user-list-container">
       {filterData(userData)?.map((user) => (
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

export default UserList;

