import axios from "axios";

var instance = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    withCredentials:false
})

export default instance;