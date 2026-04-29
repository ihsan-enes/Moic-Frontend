import axios from "axios";

var adminInstance = axios.create({
    baseURL : 'https://api.fatihmoic.com/api',
    withCredentials:true
});



export default adminInstance;