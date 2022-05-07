import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos } from "../../store/photos";
import UserCard from "../UserCard";
import MyPhotoEditModal from "../MyPhotoEditModal";
import MyDeleteModal from "../MyDeleteModal";

import "./MyPhotos.css"


const MyPhotos = () => {
    const dispatch = useDispatch();

    let photos = useSelector((state) => state.photos);
    photos = Object.values(photos);

    photos.sort((a, b) => {
        const keyA = new Date(a.createdAt);
        const keyB = new Date(b.createdAt);
        return keyA > keyB ? -1 : 1;
    });

    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    const myPhotos = photos.filter((photo) => photo.ownerId === sessionUser.id);

  return (
    <div className="main-container">
      <UserCard />
      <h2 className="my-photos-h2">my photos</h2>
      <div className="my-photos-container">
        {myPhotos.map((photo) => (
          <div className="my-photo-container" key={photo.id}>
            <img
              key={photo?.id}
              src={photo?.url}
              alt={photo?.name}
              className="my-img"
            />
            <div className="edit-delete-modal-btn">
              <MyPhotoEditModal photoId={photo?.id} />
              <MyDeleteModal photoId={photo?.id} />              
                <Link to={`/my/photos/${photo.id}`}><i className="fa-solid fa-comment" id="my-comment-link" /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPhotos;
