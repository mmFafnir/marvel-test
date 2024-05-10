import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { debounce } from "../helpers/debounce";
import {
  getSessionStorage,
  setSessionStorage,
} from "../helpers/sessionStorage";

const isBrowser = typeof window !== "undefined";

export const useSafeFetchAndScroll = (name: string) => {
  const pathname = usePathname();
  const refFirstScrollPos = useRef<number | null>(
    isBrowser ? getSessionStorage(`scrollY-${name}`) : null
  );

  const setScrollTo = () => {
    if (!refFirstScrollPos.current) return;
    window.scrollBy({
      top: refFirstScrollPos.current,
      behavior: "smooth",
    });
    refFirstScrollPos.current = null;
  };

  const setCountFetch = (count: number, limit?: number) => {
    const currentLimit = limit || 100;
    const currentCount = currentLimit < count ? currentLimit : count;
    setSessionStorage(`countFetch-${name}`, currentCount);
  };

  const getCountFetch = (): null | number => {
    const count = getSessionStorage<string>(`countFetch-${name}`);
    if (!count) return null;
    return Number(count);
  };

  const checkError = useCallback(() => {
    const value = getSessionStorage(`scroll-${pathname}`);
    console.log(value, name);
    if (value && value !== name) {
      throw Error("the hook has already been initialized on this route");
    }
    setSessionStorage(`scroll-${pathname}`, name);
  }, [pathname, name]);

  useEffect(() => {
    checkError();
    const handleScroll = debounce(() => {
      // Проверка для избежания обнуления позицию скролла при переходе на новую страницу
      if (pathname !== window.location.pathname) return;
      setSessionStorage(`scrollY-${name}`, Math.floor(window.scrollY));
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [name, pathname, checkError]);

  return { setCountFetch, getCountFetch, setScrollTo };
};
