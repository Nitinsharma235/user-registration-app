import React from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
function UserList({ userData }) {
  const navigate = useNavigate();
  return (
    <div className="user-list-container">
      {userData.map((user) => {
        return <div className="user-card-wrapper"
            onClick={()  => {
            navigate(`/user/${user.id}`, {
              state: {
                user:user,
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

                