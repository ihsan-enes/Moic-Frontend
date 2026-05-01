import axios from "axios";

var instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: false
});


instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;