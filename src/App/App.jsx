import { useEffect, useState } from "react";
import { fetchImages } from "../article-api";
import { SearchBar } from "../SearchBar/SearchBar";
import { Loader } from "../Loader/Loader";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import css from './App.module.css'
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";

export const App = () => {
   const [query, setQuery] = useState('')
   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(false)
   const [page, setPage] = useState(1);

   useEffect(() => {
      if(query === '') {
         return;
      }

      async function getData() {
         try {
            setIsLoading(true);
            setError(false);
            const data = await fetchImages(query, page);
            setIsLoading(false);
            setImages(prevImage => {
               return [...prevImage, ...data];
            }); 
         } catch (e) {
            setError(true);
         } finally {
            setIsLoading(false);
         }
      }
      
      getData()
   }, [page, query])


   const handleSearch = async (newQuery) => {
      setQuery(newQuery);
      setPage(1)
      setImages([]);
   };

   const handleGetMore = () => {
      setPage(page + 1)
   }

   return (
      <div className={css.main}>
         <SearchBar onSearch={handleSearch} />
         {isLoading && <Loader />}
         {error && <ErrorMessage/>}
         {images.length > 0 && <ImageGallery items={images} />}
         {images.length > 0 && !isLoading && <LoadMoreBtn onGetMore={handleGetMore} />}
      </div>
   )
};
