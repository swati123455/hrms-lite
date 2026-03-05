import axios from "axios";

const api = axios.create({
baseURL: "https://hrms-lite-backend.onrender.com/api"
});

export default api;