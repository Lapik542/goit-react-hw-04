import axios from "axios";

const ACCESS_KEY = "ZWzqozCygpoMnQXLcRHunbfuVomPULEv6GDJEymya0c";
axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async (searchQuery, page) => {
    try {
        const response = await axios.get("/search/photos", {
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
            params: {
                query: searchQuery,
                per_page: 12,
                page,
            }
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};
