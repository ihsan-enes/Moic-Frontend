import axios from "axios";

var instance = axios.create({
    baseURL:'https://api.fatihmoic.com/api',
    withCredentials:false
})

export default instance;