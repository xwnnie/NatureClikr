import { useEffect } from "react";
import { useSelector } from "react-redux";
import UserCard from "../UserCard";

const Profile = () => {
  const sessionUser = useSelector((state) => state.session.user);
    // console.log("session", sessionUser)
    //API call
  let user;
  user = {
    id: 1,
    displayName: "test",
    createdAt: "2020"
  }
  return (
    <div className="main-container">
      <UserCard user={user}/>
    </div>
  );
};

export default Profile;
