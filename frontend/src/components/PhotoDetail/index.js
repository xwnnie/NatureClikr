import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos } from "../../store/photos.js";
import { getFaves, addFave } from "../../store/faves.js";
import EditPhotoModal from "../EditPhotoModal/index.js";
import DeleteConfirmModal from "../DeleteConfirmModal/index.js";

import "./PhotoDetail.css";


const PhotoDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { photoId } = useParams();

  let photos = useSelector((state) => state.photos);
  photos = Object.values(photos);
  // console.log(photos)

  photos.sort((a, b) => {
    const keyA = new Date(a.createdAt);
    const keyB = new Date(b.createdAt);
    return keyA > keyB ? -1 : 1;
  });
  // const photos = useSelector((state) => state.photos.order);
  const sessionUser = useSelector((state) => state.session.user);

  const photo = photos.find(photo => photo.id === +photoId);
  // console.log("photo", photo);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const index = photos.indexOf(photo);

  let date = new Date(photo?.createdAt);
  date = date.toDateString();
  // console.log(index)
  

  let editDeleteLinks;
  if (sessionUser.id === photo?.ownerId) {
    // console.log("user matched!");
    editDeleteLinks = (
      <div>
        <EditPhotoModal />
        <DeleteConfirmModal />
      </div>
    );
  }

  let faves = useSelector((state) => state.faves);
  // const favePhotos = Object.values(faves);

  useEffect(() => {
    dispatch(getFaves(sessionUser.id));
  }, [dispatch]);

  let isFave = Object.keys(faves).includes(photoId) ? true : false;
  const [fave, setFave] = useState(isFave);

  // console.log(isFave);
  console.log("isFave?", isFave)
  useEffect(() => {
    if (fave) {
      // faves.push(photo);
      isFave = true;
      console.log("check?", fave);
    }
  }, [fave]);

  const handleCheckboxChange = async () => {
    dispatch(addFave(sessionUser.id, photoId))
  }

  return (
    <div className="main-container ">
      <div className="photo-detail-card">
        <Link to="/" className="back-link">
          <i className="fa-solid fa-arrow-left" style={{ fontSize: "12px" }} />{" "}
          Back To Explore
        </Link>
        <input
          className="star"
          type="checkbox"
          name="addFave"
          value={fave}
          checked={fave}
          onChange={handleCheckboxChange}
        />
        {sessionUser && editDeleteLinks}
        <div className="photo-container">
          <Link
            to={index > 0 ? `/photos/${photos[index - 1].id}` : null}
            className={index > 0 ? "left-right-arrows" : "hidden"}
          >
            {/* <span>&lt;</span> */}
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <img src={photo?.url} className="photo-detail-img" />
          <Link
            to={
              index < photos.length - 1
                ? `/photos/${photos[index + 1].id}`
                : null
            }
            className={
              index < photos.length - 1 ? "left-right-arrows" : "hidden"
            }
          >
            {/* <span>&gt;</span> */}
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
        {/* <div className="left-right-arrows">
          <FaAngleLeft />
          <FaAngleRight />
        </div> */}
        <div className="photo-caption">
          <h3 className="">{photo?.name}</h3>
          <p className="">Author: {photo?.ownerId}</p>
          <p className="">{date}</p>
          <p className="">{photo?.location}</p>
          <p className="">{photo?.description}</p>
        </div>
      </div>
      {/* <Comment photo={photo} /> */}
    </div>
  );
};

export default PhotoDetail;
