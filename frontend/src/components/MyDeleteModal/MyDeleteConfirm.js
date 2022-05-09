import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { deletePhoto } from "../../store/photos.js";
import { getFaves, removeFave } from "../../store/faves.js";

const MyDeleteConfirm = ({showModal, photoId}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  let faves = useSelector((state) => state.faves);

  useEffect(() => {
    dispatch(getFaves(sessionUser.id));
  }, [dispatch]);


  const deleteCurrentPhoto = async () => {
    await dispatch(deletePhoto(photoId));
    if (faves[photoId]) await dispatch(removeFave(sessionUser.id, photoId));
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
