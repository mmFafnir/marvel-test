export const setSessionStorage = <T>(key: string, obj: T) => {
  window.sessionStorage.setItem(key, JSON.stringify(obj));
};
export const getSessionStorage = <T>(key: string): T | null => {
  const value = window.sessionStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

export const removeSessionStorage = (key: string) => {
  window.sessionStorage.removeItem(key);
};
