import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPhotos, deletePhoto } from "../../store/photos.js";
import { getFaves, addFave, removeFave } from "../../store/faves.js";
import EditPhotoModal from "../EditPhotoModal/index.js";
import "./DeleteConfirm.css";

const DeleteConfirm = ({ showModal }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { photoId } = useParams();
    let photos = useSelector((state) => state.photos);
    photos = Object.values(photos);
    useEffect(() => {
      dispatch(getPhotos());
    }, [dispatch]);
    const sessionUser = useSelector((state) => state.session.user);
    const photo = photos.find((photo) => photo.id === +photoId);
    let faves = useSelector((state) => state.faves);

    useEffect(() => {
      dispatch(getFaves(sessionUser.id));
    }, [dispatch]);
    
  const deleteCurrentPhoto = async () => {
    const deletedPhotoId = await dispatch(deletePhoto(photoId));
    if (faves[photoId]) await dispatch(removeFave(sessionUser.id, photoId));
    if (deletedPhotoId) {
      history.push(`/`);
      showModal(false);
    }
  };

  return (
    <div className="delete-form">
      Do you really want to delete this photo?
      <div>
        <button type="submit" onClick={deleteCurrentPhoto}>
          Yes
        </button>        
      </div>

    </div>
  );
};

export default DeleteConfirm;
