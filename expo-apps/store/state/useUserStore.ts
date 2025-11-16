import { create } from "zustand";

type UserStore = {
  name: string;
  avatar: string | null;
  setName: (name: string) => void;
  setAvatar: (url: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: "",
  avatar: null,
  setName: (name) => set({ name }),
  setAvatar: (avatar) => set({ avatar }),
}));
