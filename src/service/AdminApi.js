import axios from "axios";

var adminInstance = axios.create({
    baseURL : 'http://localhost:5119/api',
    withCredentials:true
});



export default adminInstance;