import axios from "axios";

var instance = axios.create({
    baseURL:'https://moic-backend-production.up.railway.app/api',
    withCredentials:true
})

export default instance;