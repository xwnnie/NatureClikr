import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos } from "../../store/photos";
import { getFaves } from "../../store/faves";
import UserCard from "../UserCard";
import MyPhotoEditModal from "../MyPhotoEditModal";
import MyDeleteModal from "../MyDeleteModal";

// import "./MyPhotos.css";

const MyFaves = () => {
  const dispatch = useDispatch();

  let faves = useSelector((state) => state.faves);
  faves = Object.values(faves);

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getFaves(sessionUser.id));
  }, [dispatch]);

//   const myPhotos = photos.filter((photo) => photo.ownerId === sessionUser.id);
  //   console.log(myPhotos);
  return (
    <div className="main-container">
      <UserCard />
      <h2>my faves</h2>
      <div className="my-photos-container">
        {faves.map((photo) => (
          <div className="my-photo-container" key={photo.id}>
            <img
              key={photo?.id}
              src={photo?.url}
              alt={photo?.name}
              className="my-img"
            />
            <div className="edit-delete-modal-btn">
              {/* <MyPhotoEditModal photoId={photo?.id} />
              <MyDeleteModal photoId={photo?.id} /> */}
              <Link to={`/my/faves/${photo.id}`}>
                <i className="fa-solid fa-comment" id="my-comment-link" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFaves;
