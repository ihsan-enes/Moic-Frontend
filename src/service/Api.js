import axios from "axios";

var instance = axios.create({
    baseURL:'http://localhost:5119/api'
})

export default instance;