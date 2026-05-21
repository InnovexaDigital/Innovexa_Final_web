"use client";

import { create } from "zustand";

type UIState = {
  activePortfolioCategory: string;
  setActivePortfolioCategory: (category: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  activePortfolioCategory: "All",
  setActivePortfolioCategory: (category) => set({ activePortfolioCategory: category }),
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open })
}));
