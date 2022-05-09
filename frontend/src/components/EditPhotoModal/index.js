import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditPhotoForm from "./EditPhotoForm";

function EditPhotoModal({ photoId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="edit-link">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPhotoForm photoId={photoId} showModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditPhotoModal;
