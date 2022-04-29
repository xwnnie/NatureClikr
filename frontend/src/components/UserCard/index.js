import "./UserCard.css";

const UserCard = () => {
  return (
    <div className="main-container">
      <div className="usercard">
        <div className="usercard-text">
          <h1 id="usercard-username">Xiaowen Nie</h1>
          <div className="user-info">
            <div>niexiaowen90</div>
            <div>Joined 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;