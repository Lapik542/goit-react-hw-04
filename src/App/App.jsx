import { useEffect, useState } from "react";
import { fetchImages } from "../article-api";
import { SearchBar } from "../SearchBar/SearchBar";
import { Loader } from "../Loader/Loader";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import css from './App.module.css'

export const App = () => {
   const [images, setImages] = useState([]);

   const handleSearch = (newQuery) => {
      console.log(newQuery);
   }

   return (
      <div className={css.main}>
         <SearchBar onSearch={handleSearch} />
         <br />
         <br />
         <br />
         <br />
         <br />
         <Loader />
         <ImageGallery items={images} />
      </div>
   )
};

// useEffect(() => {
//    async function getImage() {
//       const data = await fetchImages()
//       setImages(data)
//    }
//    getImage();
// }, []);