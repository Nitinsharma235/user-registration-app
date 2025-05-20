import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
function UserList({ userData }) {
  const navigate = useNavigate();
  return (
    <div>
      {userData.map((user) => {
        return <div onClick={()  => {
            navigate(`/user/${user.id}`, {
              state: {
                user1:user,
              },
            });
          }}>
          <UserCard  user={user}></UserCard>
        </div>;
      })}
    </div>
  );
}

export default UserList;

{
  /* <Link to={`/user/${user.id}`}>{user.name}</Link> */
}

            //  { state: { user },key:"value" }
                