"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useQueryParamsHook = <T extends string>() => {
  const navigate = useRouter();
  const searchParamsQuery = useSearchParams();

  const getQueryParam = useCallback(
    <J extends string | null>(key: T): J => {
      return searchParamsQuery.get(key) as J;
    },
    [searchParamsQuery]
  );

  const setQueryParam = useCallback(
    (key: T, value: string) => {
      const url = new URL(window.location.href);
      url.searchParams.set(key, value);
      navigate.push(url.href, { scroll: false });
    },
    [navigate]
  );

  const removeQueryParam = useCallback(
    (key: T) => {
      const url = new URL(window.location.href);
      url.searchParams.delete(key);
      navigate.push(url.href, { scroll: false });
    },
    [navigate]
  );

  return {
    getQueryParam,
    setQueryParam,
    removeQueryParam,
  };
};
