import axios from "axios";

var adminInstance = axios.create({
    baseURL : 'https://moic-backend-production.up.railway.app/api',
    withCredentials:true
});



export default adminInstance;