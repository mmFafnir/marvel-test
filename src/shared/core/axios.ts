import axiosDefault from "axios";
import { md5 } from "js-md5";
import { apiUrl } from "../configs/urls";
export const axios = axiosDefault.create({
  baseURL: apiUrl,
});

const PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_API_KEY || 0;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY || 0;

axios.interceptors.request.use((config) => {
  const hash = md5.create();
  const ts = Date.now();
  hash.update(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);
  config.params = {
    apikey: PUBLIC_KEY,
    hash: hash.hex(),
    ts,
  };
  return config;
});
