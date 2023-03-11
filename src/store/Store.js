import { create } from "zustand";

const cuadradosMedios = (seed, quantity) => {
  let y = [];
  let x = [];
  let r = [];

  const originalSeedLength = seed.length;
  for (let i = 0; i < quantity; i++) {
    seed = Math.pow(seed, 2);
    y = y.concat(seed);

    let seedLengthDifference = String(seed).length - originalSeedLength;
    if (seedLengthDifference % 2 !== 0) {
      seed = "0" + seed;
      seedLengthDifference++;
    }
    seed = String(seed).slice(
      seedLengthDifference / 2,
      seedLengthDifference / 2 + originalSeedLength
    );
    seed = parseInt(seed);
    x = x.concat(seed);
    r = r.concat(seed / Math.pow(10, originalSeedLength));
  }

  return { table: [x, y, r] };
};

const productosMedios = (seed1, seed2, quantity) => {
  let y = [];
  let x = [];
  let r = [];

  const originalSeed1Length = seed1.length;
  const originalSeed2Length = seed2.length;
  for (let i = 0; i < quantity; i++) {
    seed1 = parseInt(seed1);
    seed2 = parseInt(seed2);
    seed1 = seed1 * seed2;
    y = y.concat(seed1);

    let seed1LengthDifference = String(seed1).length - originalSeed1Length;
    if (seed1LengthDifference % 2 !== 0) {
      seed1 = "0" + seed1;
      seed1LengthDifference++;
    }
    seed1 = String(seed1).slice(
      seed1LengthDifference / 2,
      seed1LengthDifference / 2 + originalSeed1Length
    );
    seed1 = parseInt(seed1);
    x = x.concat(seed1);
    r = r.concat(seed1 / Math.pow(10, originalSeed1Length));
  }

  return { table: [x, y, r] };
};

const useStore = create((set) => ({
  selectedMethod: "cuadrados medios",
  setSelectedMethod: (method) => set({ selectedMethod: method }),

  seed: "",
  setSeed: (seed) => set({ seed }),

  seed2: "",
  setSeed2: (seed2) => set({ seed2 }),

  quantity: "",
  setQuantity: (quantity) => set({ quantity }),

  table: [],
  generate: () =>
    set((state) => {
      {
        const method = state.selectedMethod;
        let table = [];
        switch (method) {
          case "cuadrados medios":
            table = cuadradosMedios(state.seed, state.quantity);
            break;
          case "productos medios":
            table = productosMedios(state.seed, state.seed2, state.quantity);
            break;
          case "lineal":
            break;
          case "multiplicativo":
          default:
            break;
        }
        return table;
      }
    }),
}));

export default useStore;
