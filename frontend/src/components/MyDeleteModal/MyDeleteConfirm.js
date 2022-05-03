import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getPhotos, deletePhoto } from "../../store/photos.js";
import EditPhotoModal from "../EditPhotoModal/index.js";

const MyDeleteConfirm = ({photoId}) => {
  const history = useHistory();
  const dispatch = useDispatch();

//   const { photoId } = useParams();

  // const photos = useSelector((state) => state.photos.order);
  // const photo = photos.find((photo) => photo.id === +photoId);

  const deleteCurrentPhoto = async () => {
    const deletedPhotoId = await dispatch(deletePhoto(photoId));
    if (deletedPhotoId) {
      history.push(`/my/photos`);
    }
  };

  return (
    <div className="upload-form">
      Do you really want to delete this photo?
      <button type="submit" onClick={deleteCurrentPhoto}>
        Yes
      </button>
    </div>
  );
};

export default MyDeleteConfirm;
