import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./UserCard.css";

const UserCard = () => {
  const sessionUser = useSelector((state) => state.session.user);
  let user = sessionUser;
  let date = new Date(user?.createdAt);
  date = date.getFullYear();
  // console.log("session", sessionUser)
  //API call
  // let user;
  // useEffect(() => {
    // async function fetchData() {
    //   user = await fetch(`/api/users/${sessionUser.id}`).then((res) =>
    //     res.json()
    //   );
    //   console.log("api-fetch", user);
    // }
    // fetchData();
  // }, []);
  return (
    <div className="main-container">
      <div className="usercard">
        <div className="usercard-text">
          <h1 id="usercard-username">{user?.displayName}</h1>
          <div className="user-info">
            <div>{user?.username}</div>
            <div>{user?.location}</div>
            <div>Joined {date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
