import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  timeout: 6000
});

export default api;