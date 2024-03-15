import { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import css from './ImageModal.module.css';

export const ImageModal = ({ imageUrl, altText, onClose }) => {
   const [isOpen, setIsOpen] = useState(true);

   const handleClose = () => {
      setIsOpen(false);
      onClose();
   };

   const handleKeyDown = (event) => {
      if (event.key === "Escape") {
         handleClose();
      }
   };

   useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };
   }, []); // Потрібно викликати useEffect тільки раз під час монтування компоненти

   return (
      <CSSTransition in={isOpen} timeout={500} classNames="modal" unmountOnExit>
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
