import { useState } from "react";

export type SearchParams = {
  category: number;
  interest: number;
  digitalLevel: number;
  keyword: string;
  sido: string;
  districts: string;
};

export function useSearchParams(initial?: Partial<SearchParams>) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    category: 0,
    interest: 0,
    digitalLevel: 0,
    keyword: "",
    sido: "",
    districts: "",
    ...initial,
  });

  const updateParams = <K extends keyof SearchParams> (
    key: K,
    value: SearchParams[K]
  ) => {
    setSearchParams((prev) => ({
        ...prev,
        [key] : value,
    }))
  }

  return {
    searchParams,
    setSearchParams,
    updateParams
  }
}
