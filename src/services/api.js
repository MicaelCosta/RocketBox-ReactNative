import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oministack-backendmicael.herokuapp.com',
});

export default api;