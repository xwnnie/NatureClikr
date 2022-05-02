import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos, deletePhoto } from "../../store/photos.js";

// import photos from "../../data/photos-raw.js";
import "./PhotoDetail.css";


const PhotoDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { photoId } = useParams();

  const photos = useSelector((state) => state.photos.order);
  const sessionUser = useSelector((state) => state.session.user);


  // console.log(photosObj);
  // const photos = Object.values(photosObj);
  // console.log("photos", photos)
  const photo = photos.find(photo => photo.id === +photoId);
  console.log("photo", photo);

  const index = photos.indexOf(photo);
  let date = new Date(photo?.createdAt);

  date = date.toDateString();
  // console.log(index)


  const editPhoto = () => {

  }
  
  const deleteCurrentPhoto = async () => {
    const deletedPhotoId = await dispatch(deletePhoto(photoId));
    if (deletedPhotoId) {
      history.push(`/`);
    }
  }

  let editDeleteLinks;
  if (sessionUser.id === photo?.ownerId) {
    // console.log("user matched!");
    editDeleteLinks = (
      <div>
        <Link id="edit-link" onClick={editPhoto}>
          <i class="fa-solid fa-pen-to-square"></i>
        </Link>
        <Link id="delete-link" onClick={deleteCurrentPhoto}>
          <i class="fa-solid fa-trash-can"></i>
        </Link>
      </div>
    );
  }


  //check if the photo belongs to faves of current loggedin user to decide initial value of fav
  
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

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
        <Link to="/" className="back-link">
          <i className="fa-solid fa-arrow-left" style={{ fontSize: "12px" }} />{" "}
          BACK
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

export default PhotoDetail;
