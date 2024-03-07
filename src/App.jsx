import { useEffect, useState } from "react";
import { ArticleList } from "./ArticleList.jsx";
import { fetchArticles } from "./article-api.js";
import SearchForm from "./form/SearchForm.jsx";

export const App = () => {
  const [articles, setArticles] = useState([])

  const handleSearch =  async newQuery => {
    const data = await fetchArticles()
    setArticles(data)
  }


  return <div>
    <SearchForm onSearch={handleSearch}/>
    <ArticleList items={articles}/>
    </div>
};
