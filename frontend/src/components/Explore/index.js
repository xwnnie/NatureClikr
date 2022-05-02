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

  const photos = useSelector((state) => state.photos.order);
  
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch, photos]);

  const redirectToPhoto = (photo) => {
    history.push(`/photos/${photo.id}`);
  };

  return (
    <div className="explore-container">
      <h1 style={{ paddingTop: "15px" }}>Explore photos</h1>
      {/* <Gallery
        photos={photos}
        onClick={(e) => {
          redirectToPhoto(e.target);
        }}
        direction={"column"}
      /> */}
      <div className="masonry">
        {photos.map((photo) => (
          <div className="masonry-item" key={photo.id}>
            <img
              onClick={() => {
                redirectToPhoto(photo);
              }}
              // className="grid-image"
              key={photo.id}
              src={photo.url}
              alt={photo.name}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
