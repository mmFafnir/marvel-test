import axiosDefault from "axios";
export const axios = axiosDefault.create({
  baseURL: " https://gateway.marvel.com:443/v1/public/",
});

const apiId = process.env.NEXT_PUBLIC_MARVEL_API_KEY;
axios.interceptors.request.use((config) => {
  config.params = {
    apikey: apiId,
  };
  return config;
});
