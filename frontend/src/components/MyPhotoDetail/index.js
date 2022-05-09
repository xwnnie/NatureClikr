import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos } from "../../store/photos.js";
import { getFaves, addFave, removeFave } from "../../store/faves.js";

import EditPhotoModal from "../EditPhotoModal/index.js";
import DeleteConfirmModal from "../DeleteConfirmModal/index.js";
import Comments from "../Comments/index.js";

const MyPhotoDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const { photoId } = useParams();

  let photos = useSelector((state) => state.photos);
  photos = Object.values(photos);

  photos.sort((a, b) => {
    const keyA = new Date(a.createdAt);
    const keyB = new Date(b.createdAt);
    return keyA > keyB ? -1 : 1;
  });

  const sessionUser = useSelector((state) => state.session.user);

  const photo = photos.find((photo) => photo.id === +photoId);

  const myPhotos = photos.filter((photo) => photo.ownerId === sessionUser.id);

  const index = myPhotos.indexOf(photo);
  let date = new Date(photo?.createdAt);

  date = date.toDateString();

  let faves = useSelector((state) => state.faves);
  useEffect(() => {
    dispatch(getFaves(sessionUser.id));
  }, [dispatch]);

  let isFave = faves[photoId] ? true : false;

  let editDeleteLinks;
  if (sessionUser.id === photo?.ownerId) {
    editDeleteLinks = (
      <div>
        <EditPhotoModal />
        <DeleteConfirmModal />
      </div>
    );
  }

  const handleCheckboxChange = async (checked) => {
    if (checked) {
      dispatch(addFave(sessionUser.id, photoId));
    } else {
      dispatch(removeFave(sessionUser.id, photoId));
    }
  };

  return (
    <div className="main-container ">
      <div className="photo-detail-card">
        <Link to="/my/photos" className="back-link">
          <i className="fa-solid fa-arrow-left" style={{ fontSize: "12px" }} />{" "}
          Back to My Photos
        </Link>
        <input
          className="star"
          type="checkbox"
          name="addFave"
          checked={isFave}
          onChange={(e) => {
            handleCheckboxChange(e.target.checked);
          }}
        />
        {sessionUser && editDeleteLinks}
        <div className="photo-container">
          <Link
            to={index > 0 ? `/my/photos/${myPhotos[index - 1].id}` : null}
            className={index > 0 ? "left-right-arrows" : "hidden"}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <img src={photo?.url} className="photo-detail-img" />
          <Link
            to={
              index < myPhotos.length - 1
                ? `/my/photos/${myPhotos[index + 1].id}`
                : null
            }
            className={
              index < myPhotos.length - 1 ? "left-right-arrows" : "hidden"
            }
          >
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
        <div className="photo-caption">
          <h3 className="">{photo?.name}</h3>
          <p className="">Author: {photo?.User.displayName}</p>
          <p className="">{date}</p>
          <p className="">{photo?.location}</p>
          <p className="">{photo?.description}</p>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default MyPhotoDetail;
