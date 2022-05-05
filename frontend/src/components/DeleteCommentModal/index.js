import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteComment from "./DeleteComment";

function DeleteCommentModal({commentId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="delete-comment-btn">
        <i className="fa-solid fa-trash-can"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteComment showModal={setShowModal} commentId={commentId}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCommentModal;
