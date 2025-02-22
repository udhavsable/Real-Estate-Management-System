import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getProperties = async () => {
    const response = await API.get("/properties");
    return response.data;
};
