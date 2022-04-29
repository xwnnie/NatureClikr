import { useParams, Link } from "react-router-dom";
import photos from "../../data/photos-raw.js";
import "./PhotoDetail.css";
import {
  FaArrowLeft,
  FaRegStar,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const PhotoDetail = () => {
  const { photoId } = useParams();
  const photo = photos.find((photo) => photo.id == photoId);
  //check if the photo belongs to faves of current loggedin user to decide initial value of fav

  const faves = [];
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (fav) {
      faves.push(photo);
      console.log(faves);
    }
  }, [fav]);

  return (
    <div className="main-container ">
      <div className="photo-detail-card">
        <Link to="/" className="back-link">
          <FaArrowLeft style={{ fontSize: "12px" }} /> BACK
        </Link>
        <input
          className="star"
          type="checkbox"
          name="addFave"
          checked={fav}
          onClick={(e) => {
            setFav(e.target.checked);
          }}
        />
        <div className="photo-container">
          <Link
            to={`/photos/${parseInt(photoId) - 1}`}
            className={
              parseInt(photoId) - 1 > 0 ? "left-right-arrows" : "hidden"
            }
          >
            {/* <FaAngleLeft className="left-right-arrows" /> */}
            {/* <span>&lt;</span> */}
            <i class="fa-solid fa-chevron-left"></i>
          </Link>
          <img src={photo.src} className="photo-detail-img" />
          <Link
            to={`/photos/${parseInt(photoId) + 1}`}
            className={
              parseInt(photoId) + 1 <= photos.length
                ? "left-right-arrows"
                : "hidden"
            }
          >
            {/* <FaAngleRight className="left-right-arrows" /> */}
            {/* <span>&gt;</span> */}
            <i class="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
        {/* <div className="left-right-arrows">
          <FaAngleLeft />
          <FaAngleRight />
        </div> */}
        <div className="photo-caption">
          <h3 className="">{photo.name}</h3>
          <p className="">author</p>
          <p className="">date</p>
          <p className="">description</p>
        </div>
      </div>
      {/* <Comment photo={photo} /> */}
    </div>
  );
};

export default PhotoDetail;
