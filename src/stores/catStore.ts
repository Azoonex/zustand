import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TcAtStoreState = {
    cats: {
        bigCats: number;
        smallCats: number;
    };
    increaseBigCats: () => void;
    increaseSmallCats: () => void;
};

export const useCatStore = create<TcAtStoreState>()(
    immer((set) => ({
        cats: {
            bigCats: 0,
            smallCats: 0,
        },
        increaseBigCats: () =>
            set((state) => {
                state.cats.bigCats++;
            }),
        increaseSmallCats: () =>
            set((state) => {
                state.cats.smallCats++;
            }),
    }))
);
