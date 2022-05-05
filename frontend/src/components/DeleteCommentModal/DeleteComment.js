import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { deleteComment } from "../../store/comments.js";


const DeleteComment = ({ showModal, commentId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { photoId } = useParams();

  const deleteCurrentComment = async () => {
    const deletedCommentId = await dispatch(deleteComment(commentId));
    if (deletedCommentId) {
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
