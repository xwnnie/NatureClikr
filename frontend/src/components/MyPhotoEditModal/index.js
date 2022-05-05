import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import MyPhotoEditForm from "./MyPhotoEditForm.js";

function MyPhotoEditModal({ photoId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} id="my-edit-link">
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MyPhotoEditForm photoId={photoId} showModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default MyPhotoEditModal;
