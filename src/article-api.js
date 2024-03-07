import axios from "axios";

export const fetchArticles = async (query) => {
    const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      return response.data.hits
}