import { Link, useHistory } from "react-router-dom";
import "./ChooseAlbum.css";
import myPhotosImg from "../../images/my-photos.png";
import myFavesImg from "../../images/my-faves.png";

const ChooseAlbum = () => {
//   const history = useHistory();
//   const toMyPhotos = () => {
//     history.push("/users/1/my-photos");
//   };
//   const toMyFaves = () => {
//     history.push("/users/1/my-faves");
//   };
  return (
    <div className="main-container">
      <div className="album-container">
        <div className="album-card">
          <Link to="/my/photos">
            <img className="album-cover" src={myPhotosImg} alt="my-photos" />
          </Link>
          <h1>My Photos</h1>
        </div>
        <div className="album-card">
          <Link to="/my/faves">
            <img className="album-cover" src={myFavesImg} />
          </Link>
          <h1>My Faves</h1>
        </div>
      </div>
    </div>
  );
};

export default ChooseAlbum;
