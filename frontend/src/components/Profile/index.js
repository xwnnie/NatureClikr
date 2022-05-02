import { useEffect } from "react";
import { useSelector } from "react-redux";
import ChooseAlbum from "../ChooseAlbum";
import UserCard from "../UserCard";

const Profile = () => {
  const sessionUser = useSelector((state) => state.session.user);
    // console.log("session", sessionUser)
    //API call
  return (
    <div className="main-container">
      <UserCard />
      <ChooseAlbum />
    </div>
  );
};

export default Profile;
