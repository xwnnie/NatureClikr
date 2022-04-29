import photos from "../../data/photos-raw.js";
import "./Explore.css";
import Gallery from "react-photo-gallery";
import { useHistory } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";

const Explore = () => {
  //redirect to photo-detail page after clicking a photo
  const history = useHistory();
  const redirectToPhoto = (photo) => {
    history.push(`/photos/${photo.id}`);
  };

  return (
    <div className="main-container">
      <h2 style={{paddingTop: "15px"}}>Explore photos</h2>
      <Gallery
        photos={photos}
        onClick={(e) => {
          redirectToPhoto(e.target);
        }}
        direction={"column"}
      />
    </div>
  );
};

export default Explore;
