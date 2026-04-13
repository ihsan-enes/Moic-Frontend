import axios from "axios";

var adminInstance = axios.create({
    baseURL : 'http://localhost:5119/api'
});

adminInstance.interceptors.request.use((config) => {
    const token  = localStorage.getItem('adminToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

export default adminInstance;