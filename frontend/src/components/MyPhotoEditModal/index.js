import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import MyPhotoEditForm from "./MyPhotoEditForm.js";

function MyPhotoEditModal({ photoId }) {
  const [showModal, setShowModal] = useState(false);
//   console.log(photoId);
  return (
    <>
      <button onClick={() => setShowModal(true)} id="my-edit-link">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MyPhotoEditForm photoId={photoId}/>
        </Modal>
      )}
    </>
  );
}

export default MyPhotoEditModal;
