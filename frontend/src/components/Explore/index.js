// import photos from "../../data/photos-raw.js";
import "./Explore.css";
import Gallery from "react-photo-gallery";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import { getPhotos } from "../../store/photos.js";

const Explore = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //get photos from state
  // const sessionUser = useSelector((state) => state.session.user);
  const photosObj = useSelector((state) => state.photos);
  // console.log(photosObj);
  const photos = Object.values(photosObj);
  // photos.forEach((photo) => {
  //   photo.width = parseInt(photo.width),
  //   photo.height = parseInt(photo.height)
  // })
  // console.log(photos)
  
  
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  //redirect to photo-detail page after clicking a photo
  
  const redirectToPhoto = (photo) => {
    history.push(`/photos/${photo.id}`);
  };


  return (
    <div className="main-container">
      <h2 style={{ paddingTop: "15px" }}>Explore photos</h2>
      <Gallery
        photos={photos}
        onClick={(e) => {
          redirectToPhoto(e.target);
        }}
        direction={"column"}
      />
      {/* <div className="all-images-container">
        {photos.map((photo) => (
          <div className="image-container">
            <img
              onClick={() => {redirectToPhoto(photo)}}
              className="grid-image"
              id={photo.id}
              key={photo.id}
              src={photo.src}
              alt={photo.name}
            ></img>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Explore;
