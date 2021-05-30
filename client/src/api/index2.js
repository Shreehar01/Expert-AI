import axios from 'axios';

const API2 = axios.create({baseURL: "http://127.0.0.1:5000/"});
export const heartPrediction = (heartPost) => API2.post('/heart-prediction', heartPost);
