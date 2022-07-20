import axios from 'axios';

export const caribbeanApi = axios.create({
    baseURL: process.env.REACT_APP_CARIBBEAN_URL
})