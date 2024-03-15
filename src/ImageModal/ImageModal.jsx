import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import css from './ImageModal.module.css';

export const ImageModal = ({ imageUrl, altText, onClose }) => {
   const [isOpen, setIsOpen] = useState(true);

   const handleClose = () => {
      setIsOpen(false);
      onClose();
   };

   return (
      <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
         <div className={css.modalOverlay} onClick={handleClose}>
            <div className={css.modalContent}>
               <img src={imageUrl} alt={altText} />
               <button onClick={handleClose} className={css.closeButton}>
                  Close
               </button>
            </div>
         </div>
      </CSSTransition>
   );
};
