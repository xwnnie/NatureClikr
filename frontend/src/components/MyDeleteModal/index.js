import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import MyDeleteConfirm from "./MyDeleteConfirm";

function DeleteConfirmModal({photoId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="my-delete-link">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MyDeleteConfirm photoId={photoId} showModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteConfirmModal;
