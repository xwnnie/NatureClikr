import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getPhotos, deletePhoto } from "../../store/photos.js";

const MyDeleteConfirm = ({showModal, photoId}) => {
  const history = useHistory();
  const dispatch = useDispatch();


  const deleteCurrentPhoto = async () => {
    await dispatch(deletePhoto(photoId));
      history.push(`/my/photos`);
      showModal(false);
  };

  return (
    <div className="upload-form delete-form">
      Do you really want to delete this photo?
      <button type="submit" onClick={deleteCurrentPhoto}>
        Yes
      </button>
    </div>
  );
};

export default MyDeleteConfirm;
