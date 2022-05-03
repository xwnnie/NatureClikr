import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos, deletePhoto } from "../../store/photos.js";
import EditPhotoModal from "../EditPhotoModal/index.js";
import DeleteConfirmModal from "../DeleteConfirmModal/index.js";

// import "./PhotoDetail.css";

const MyPhotoDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

  const { photoId } = useParams();

    let photos = useSelector((state) => state.photos);
    photos = Object.values(photos);
    // console.log(photos)

    photos.sort((a, b) => {
    const keyA = new Date(a.createdAt);
    const keyB = new Date(b.createdAt);
    // console.log(keyA)
    // console.log(keyB)
    return keyA > keyB ? -1 : 1;
    });

  const sessionUser = useSelector((state) => state.session.user);

  const photo = photos.find((photo) => photo.id === +photoId);
  // console.log("photo", photo);

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

  //check if the photo belongs to faves of current loggedin user to decide initial value of fav



  const faves = [];
  const [fave, setFave] = useState(false);

  useEffect(() => {
    if (fave) {
      faves.push(photo);
      console.log(faves);
    }
  }, [fave]);

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
          checked={fave}
          onClick={(e) => {
            setFave(e.target.checked);
          }}
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

export default MyPhotoDetail;
