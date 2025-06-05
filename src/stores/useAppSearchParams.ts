import { create } from "zustand";

export type SearchParams = {
  category: number;
  interest: number;
  digitalLevel: number;
  keyword: string;
  sido: string;
  districts: string;
};

type State = {
  searchParams: SearchParams;
  updateParams: <K extends keyof SearchParams>(
    key: K,
    value: SearchParams[K]
  ) => void;
};

export const useAppSearchParams = create<State>((set) => ({
  searchParams: {
    category: 0,
    interest: 0,
    keyword: "",
    digitalLevel: 0,
    sido: "",
    districts: "",
  },
  updateParams: (key, value) => {
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        [key]: value,
      },
    }));
  },
}));
