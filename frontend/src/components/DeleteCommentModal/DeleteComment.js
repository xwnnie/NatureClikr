import { useDispatch} from "react-redux";

import { deleteComment } from "../../store/comments.js";

const DeleteComment = ({ showModal, commentId }) => {
  const dispatch = useDispatch();

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
