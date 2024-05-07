"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { queryParams } from "../configs/queryParams";

type TypeKey = keyof typeof queryParams;

export const useQueryParamsHook = () => {
  const navigate = useRouter();
  const searchParamsQuery = useSearchParams();

  return {
    get: (key: TypeKey) => {
      return searchParamsQuery.get(queryParams[key]);
    },

    set: (key: TypeKey, value: string) => {
      const url = new URL(window.location.href);
      url.searchParams.set(key, value);
      navigate.push(url.href, { scroll: false });
    },

    remove: (key: TypeKey) => {
      const url = new URL(window.location.href);
      url.searchParams.delete(queryParams[key]);
      navigate.push(url.href, { scroll: false });
    },
  };
};
