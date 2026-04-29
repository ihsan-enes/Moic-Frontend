import axios from "axios";

var instance = axios.create({
    baseURL:'https://api.fatihmoic.com/api',
    withCredentials:true
})

export default instance;