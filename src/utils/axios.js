import axios from "axios";
const instance = axios.create({
    baseURL: 'https://todo-app-backend-rouge.vercel.app/',
    // baseURL: 'http://localhost:4444',
    withCredentials: true
});

export default instance;