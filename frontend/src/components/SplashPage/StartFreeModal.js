import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "../SignupFormModal/SignupForm";

function StartFreeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="start-free-btn">
        Start for free
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default StartFreeModal;
