import { ImageCard } from "../ImageCard/ImageCard.jsx";
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ items, toggleModal }) => {
   return (
      <ul className={css.ImageGallery}>
         {items.map(item => (
            <li key={item.id}>
               <ImageCard item={item} toggleModal={toggleModal} />
            </li>
         ))}
      </ul>
   )
}