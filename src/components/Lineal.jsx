import useStore from "../store/Store";

const Lineal = () => {
  const generate = useStore((state) => state.generate);
  const seed = useStore((state) => state.seed);
  const setSeed = useStore((state) => state.setSeed);
  const a = useStore((state) => state.a);
  const setA = useStore((state) => state.setA);
  const c = useStore((state) => state.c);
  const setC = useStore((state) => state.setC);
  const m = useStore((state) => state.m);
  const setM = useStore((state) => state.setM);

  const handleSeed = (e) => {
    setSeed(e.target.value);
  };

  const handleA = (e) => {
    setA(e.target.value);
  };

  const handleC = (e) => {
    setC(e.target.value);
  };

  const handleM = (e) => {
    setM(e.target.value);
  };

  return (
    <div className="input-zone p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg mt-4">
      <label htmlFor="seed" className="block text-gray-700 dark:text-white">
        Semilla:
      </label>
      <input
        id="seed"
        type="text"
        value={seed}
        onChange={handleSeed}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-500 focus:border-blue-500 mt-1"
      />

      <label htmlFor="a" className="block text-gray-700 dark:text-white mt-2">
        a:
      </label>
      <input
        id="a"
        type="text"
        value={a}
        onChange={handleA}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-500 focus:border-blue-500 mt-1"
      />

      <label htmlFor="c" className="block text-gray-700 dark:text-white mt-2">
        c:
      </label>
      <input
        id="c"
        type="text"
        value={c}
        onChange={handleC}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-500 focus:border-blue-500 mt-1"
      />

      <label htmlFor="m" className="block text-gray-700 dark:text-white mt-2">
        m:
      </label>
      <input
        id="m"
        type="text"
        value={m}
        onChange={handleM}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-500 focus:border-blue-500 mt-1"
      />

      <button onClick={generate} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:border-blue-500">
        Generar
      </button>
    </div>
  );
};

export default Lineal;
