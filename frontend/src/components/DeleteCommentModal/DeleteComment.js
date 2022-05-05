import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getPhotos, deletePhoto } from "../../store/photos.js";
// import { deletePhoto } from "../../store/photos.js";
import { deleteComment } from "../../store/comments.js";
// import "./DeleteConfirm.css";

const DeleteComment = ({ showModal, commentId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { photoId } = useParams();

  // const photos = useSelector((state) => state.photos.order);
  // const photo = photos.find((photo) => photo.id === +photoId);

  const deleteCurrentComment = async () => {
    const deletedCommentId = await dispatch(deleteComment(commentId));
    if (deletedCommentId) {
    //   history.push(`/`);
      showModal(false);
    }
  };

  return (
    <div className="delete-form">
      Do you really want to delete this comment?
      <div>
        <button type="submit" onClick={deleteCurrentComment}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteComment;
