import css from './SearchBar.module.css'
import { IoSearch } from "react-icons/io5";

export const SearchBar = ({ }) => {
   return (
      <header className={css.headerBar}>
         <form>
            <input
               className={css.formInput}
               type="text"
               placeholder="Search images and photos"
            />
            <button className={css.searchBtn} type="submit">Search</button>
         </form>
      </header>
   );
}
