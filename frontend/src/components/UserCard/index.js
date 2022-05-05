import { useSelector } from "react-redux";

import "./UserCard.css";

const UserCard = () => {
  const sessionUser = useSelector((state) => state.session.user);
  let user = sessionUser;
  let date = new Date(user?.createdAt);
  date = date.getFullYear();

  return (
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
  );
};

export default UserCard;
