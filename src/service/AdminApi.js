import axios from "axios";

var instance = axios.create({
    baseURL: 'https://api.fatihmoic.com/api',
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