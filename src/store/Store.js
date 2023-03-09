import { create } from "zustand";

const useStore = create((set) => ({
  selectedMethod: "cuadrados medios",
  setSelectedMethod: (method) => set({ selectedMethod: method }),
}));

export default useStore;
