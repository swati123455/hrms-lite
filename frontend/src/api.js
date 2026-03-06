import axios from "axios";

const api = axios.create({
baseURL: "https://hrms-lite-rk6w.onrender.com/api"
});

export default api;