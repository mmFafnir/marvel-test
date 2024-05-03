import axios from "axios";
const instance = axios.create({
  baseURL: " https://gateway.marvel.com:443/v1/public/",
});

const apiId = process.env.NEXT_PUBLIC_MARVEL_API_KEY;
instance.interceptors.request.use((config) => {
  config.params = {
    apikey: apiId,
  };
  return config;
});

export default instance;
