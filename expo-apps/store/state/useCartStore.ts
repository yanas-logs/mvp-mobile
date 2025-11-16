import { create } from "zustand";

type CartItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
    image: any;
};

type CartStore = {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
    items: [],

    addToCart: (item) =>
        set((state) => ({
            items: [...state.items, item],
        })),

    removeFromCart: (id) =>
        set((state) => ({
            items: state.items.filter((i) => i.id !== id),
        })),

    clearCart: () => set({ items: [] }),
}));
