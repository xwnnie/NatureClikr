import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UploadForm from "./UploadForm";

function UploadPhotoModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="nav-upload-btn">
        <i className="fa-solid fa-cloud-arrow-up"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadForm />
        </Modal>
      )}
    </>
  );
}

export default UploadPhotoModal;
