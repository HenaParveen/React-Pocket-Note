import styles from "./UpdatePopupModel.module.css";
import { useState } from "react";
import { Modal } from "@mantine/core";

export const UpdatePopupModel = ({ openModal, setOpenModal, note }) => {
  const [content, setContent] = useState(note.content);
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");

    if (!content) {
      setError("Content is required!");
      return;
    }
  };

  return (
    <Modal
      opened={openModal}
      onClose={() => setOpenModal(false)}
      closeOnClickOutside
      withCloseButton={false}
      centered
    >
      <form className={styles.modal} onSubmit={handleUpdate}>
        <div className={styles.modal_input}>
          <textarea
            type="text"
            rows={5}
            name="content"
            defaultValue={note.content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textContent}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.modal_btn_div}>
          <button
            onClick={() => setOpenModal(false)}
            type="button"
            className={styles.modalBtnCancel}
          >
            Cancel
          </button>
          <button type="submit" className={styles.modalBtn}>
            Update
          </button>
        </div>
      </form>
    </Modal>
  );
};
