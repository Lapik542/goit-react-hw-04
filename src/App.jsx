import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleList } from "./ArticleList.jsx";

export const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setArticles(response.data.hits);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 ? (
        <ArticleList items={articles} />
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
};
