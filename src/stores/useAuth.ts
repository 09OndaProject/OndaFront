import { create } from "zustand";

interface User {
  email: string;
  password: string;
}

interface AuthState {
  email: string;
  password: string;
  users: User[];
  currentUser: User | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  addUser: (user: User) => void;
  validateUser: (email: string, password: string) => boolean;
  reset: () => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  email: "",
  password: "",
  users: [],
  currentUser: null,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  reset: () => set({ email: "", password: "" }),
  validateUser: (email, password) =>
    get().users.some(
      (user) => user.email === email && user.password === password
    ),
  login: (email, password) => {
    const matchedUser = get().users.find(
      (user) => user.email === email && user.password === password
    );
    if (matchedUser) {
      set({ currentUser: matchedUser });
      return true;
    }
    return false;
  },
  logout: () => set({ currentUser: null }),
}));
