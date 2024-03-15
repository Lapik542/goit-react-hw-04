import { useState } from "react";
import css from './ImageCard.module.css';
import { ImageModal } from "../ImageModal/ImageModal";

export const ImageCard = ({ item }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <img
            src={item.urls.small}
            alt={item.alt_description}
            width={400}
            height={300}
            onClick={handleOpenModal}
            className={css.image}
         />
         {isModalOpen && (
            <ImageModal
               imageUrl={item.urls.full}
               altText={item.alt_description}
               onClose={handleCloseModal}
            />
         )}
      </>
   );
};
