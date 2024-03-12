import axios from "axios";

axios.defaults.baseURL = '';

export const fetchImages = async () => {
    const response = await axios.get(
        'https://api.unsplash.com/photos/?client_id=ZWzqozCygpoMnQXLcRHunbfuVomPULEv6GDJEymya0c'
    );
    return response.data;
};
