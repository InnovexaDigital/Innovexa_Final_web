"use client";

import { create } from "zustand";

type UIState = {
  activePortfolioCategory: string;
  setActivePortfolioCategory: (category: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
};

export const useUIStore = create<UIState>((set) => ({
  activePortfolioCategory: "All",
  setActivePortfolioCategory: (category) => set({ activePortfolioCategory: category }),
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),
  theme: "dark",
  // Force theme to dark only — ignore attempts to set light mode.
  setTheme: () => set({ theme: "dark" })
}));
