import { apiUrl } from "../configs/urls";

export const replaceUrl = (url: string) => {
  return url.replace(apiUrl, "");
};
