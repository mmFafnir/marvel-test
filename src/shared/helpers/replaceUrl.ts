const urlApi = "http://gateway.marvel.com/v1/public";
export const replaceUrl = (url: string) => {
  return url.replace(urlApi, "");
};
