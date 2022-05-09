import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPhotos } from "../../store/photos";

import "./Explore.css";

const Explore = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  let photos = useSelector((state) => state.photos);
  photos = Object.values(photos);

  photos.sort((a, b) => {
    const keyA = new Date(a?.createdAt);
    const keyB = new Date(b?.createdAt);
    return keyA > keyB ? -1 : 1;
  });

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
