import useStore from "./../store/Store";

const CuadradosMedios = () => {
  const generate = useStore((state) => state.generate);
  const seed = useStore((state) => state.seed);
  const setSeed = useStore((state) => state.setSeed);
  const quantity = useStore((state) => state.quantity);
  const setQuantity = useStore((state) => state.setQuantity);

  const handleSeed = (e) => {
    setSeed(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
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

      <label
        htmlFor="quantity"
        className="block text-gray-700 dark:text-white mt-2"
      >
        Cantidad:
      </label>
      <input
        id="quantity"
        type="text"
        value={quantity}
        onChange={handleQuantity}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-500 focus:border-blue-500 mt-1"
      />

      <button
        onClick={generate}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
      >
        Generar
      </button>
    </div>
  );
};

export default CuadradosMedios;
