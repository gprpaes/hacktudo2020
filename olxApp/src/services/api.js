import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hackathonolx-api.herokuapp.com/',
});

export default api;