import css from './ImageCard.module.css';

export const ImageCard = ({ item, toggleModal }) => {
   const handleOpenModal = () => {
      toggleModal(item.urls.regular, item.alt_description);
   };

   return (
      <img
         src={item.urls.small}
         alt={item.alt_description}
         width={400}
         height={300}
         onClick={handleOpenModal}
         className={css.image}
      />
   );
};
