import { create } from "zustand";

const cuadradosMedios = (seed, quantity) => {
  let cabecera = ["Yi", "Xi", "Ri"];
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

  return { table: [y, x, r], cabecera: cabecera };
};

const productosMedios = (seed1, seed2, quantity) => {
  let cabecera = ["Yi", "Xi", "Ri"];
  let y = [];
  let x = [];
  let r = [];

  const originalSeed1Length = seed1.length;
  for (let i = 0; i < quantity; i++) {
    seed1 = parseInt(seed1);
    seed2 = parseInt(seed2);
    seed1 = seed1 * seed2;
    y = y.concat(seed1); // store in y_i column

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
    const aux = seed1;
    seed1 = seed2;
    seed2 = aux;
  }

  return { table: [y, x, r], cabecera: cabecera };
};

const lineal = (seed, a, c, m) => {
  let cabecera = ["(a*Xn + c) mod m", "Xn+1", "Rn+1"];
  let y = [];
  let x = [];
  let r = [];

  let xi = parseInt(seed);

  for (let i = 0; i < m; i++) {
    a = parseInt(a);
    c = parseInt(c);
    m = parseInt(m);
    y = y.concat(`((${a}*${xi}) + ${c}) % ${m}`);
    xi = (a * xi + c) % m;
    x = x.concat(xi);
    let ri = xi / m;
    r = r.concat(ri);
  }
  return { table: [y, x, r], cabecera: cabecera };
};

const multiplicativo = (seed, a, m) => {
  let cabecera = ["(a*Xn) mod m", "Xn+1", "Rn+1"];
  let y = [];
  let x = [];
  let r = [];

  let g = Math.log2(m);

  let xi = parseInt(seed);
  for (let i = 0; i < Math.pow(2, g - 2); i++) {
    a = parseInt(a);
    m = parseInt(m);
    y = y.concat(`(${a}*${xi}) % ${m}`);
    xi = (a * xi) % m;
    x = x.concat(xi);
    let ri = xi / m;
    r = r.concat(ri);
  }
  return { table: [y, x, r], cabecera: cabecera };
};

const useStore = create((set) => ({
  selectedMethod: "cuadrados medios",
  setSelectedMethod: (method) => set({ selectedMethod: method }),

  cabecera: [],

  seed: "",
  setSeed: (seed) => set({ seed }),

  seed2: "",
  setSeed2: (seed2) => set({ seed2 }),

  quantity: "",
  setQuantity: (quantity) => set({ quantity }),

  a: "",
  setA: (a) => set({ a }),

  c: "",
  setC: (c) => set({ c }),

  m: "",
  setM: (m) => set({ m }),

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
            table = lineal(state.seed, state.a, state.c, state.m);
            break;
          case "multiplicativo":
            table = multiplicativo(state.seed, state.a, state.m);
            break;
          default:
            break;
        }
        return table;
      }
    }),
}));

export default useStore;
