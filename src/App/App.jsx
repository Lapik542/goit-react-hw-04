import { useEffect, useState } from "react";
// import { fetchArticles } from "../article-api";
import { SearchBar } from "../SearchBar/SearchBar";
import { Loader } from "../Loader/Loader";
import axios from "axios";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import css from './App.module.css'

export const App = () => {
   const [images, setImages] = useState([]);

   useEffect(() => {
      async function getImage() {
         const response = await axios.get(
            'https://api.unsplash.com/photos/?client_id=ZWzqozCygpoMnQXLcRHunbfuVomPULEv6GDJEymya0c'
         );
         setImages(response.data)
      }
      getImage();
   }, []);

   return (
      <div className={css.main}>
         <SearchBar />
         <Loader />
         <ImageGallery items={images} />
      </div>
   )
};

