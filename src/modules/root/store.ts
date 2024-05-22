import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useRootStore = create<State & Actions>()(
  immer((set) => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => ({ count: state.count + qty }), false),
    decrement: (qty: number) =>
      set((state) => ({ count: state.count - qty }), false),
  }))
);
