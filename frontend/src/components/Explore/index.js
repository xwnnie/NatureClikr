// import photos from "../../data/photos-raw.js";
import "./Explore.css";
// import Gallery from "react-photo-gallery";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPhotos } from "../../store/photos";

const Explore = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  let photos = useSelector((state) => state.photos);
  photos = Object.values(photos);
  // console.log(photos)

  photos.sort((a, b) => {
    const keyA = new Date(a?.createdAt);
    const keyB = new Date(b?.createdAt);
    return keyA > keyB ? -1 : 1;
  });
  // photos = photos.sort((a, b) => b.id - a.id);
  // console.log(photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const redirectToPhoto = (photo) => {
    history.push(`/photos/${photo.id}`, {from: "explore"});
  };

  return (
    <div className="explore-container">
      <h1 style={{ paddingTop: "15px" }}>Explore photos</h1>
      <div className="masonry">
        {photos.map((photo) => (
          <div className="masonry-item" key={photo?.id}>
            <img
              onClick={() => {
                redirectToPhoto(photo);
              }}
              // className="grid-image"
              key={photo?.id}
              src={photo?.url}
              alt={photo?.name}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
