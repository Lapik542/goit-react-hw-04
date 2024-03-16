
import Modal from "react-modal";
import css from './ImageModal.module.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
    padding: 0,
    overflow: 'visible'
  }
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, imageUrl, altText, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={css.modalContent}>
        <img src={imageUrl} alt={altText} onClick={handleClick} />
        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};
