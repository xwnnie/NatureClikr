import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getPhotos, deletePhoto } from "../../store/photos.js";
import EditPhotoModal from "../EditPhotoModal/index.js";
import "./DeleteConfirm.css";

const DeleteConfirm = ({ showModal }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { photoId } = useParams();

    // const photos = useSelector((state) => state.photos.order);
    // const photo = photos.find((photo) => photo.id === +photoId);

  const deleteCurrentPhoto = async () => {
    const deletedPhotoId = await dispatch(deletePhoto(photoId));
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
