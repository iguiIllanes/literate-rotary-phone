import useStore from "./../store/Store";

const ProductosMedios = () => {
  const generate = useStore((state) => state.generate);
  const seed = useStore((state) => state.seed);
  const setSeed = useStore((state) => state.setSeed);
  const seed2 = useStore((state) => state.seed2);
  const setSeed2 = useStore((state) => state.setSeed2);
  const quantity = useStore((state) => state.quantity);
  const setQuantity = useStore((state) => state.setQuantity);

  const handleSeed = (e) => {
    setSeed(e.target.value);
  };

  const handleSeed2 = (e) => {
    setSeed2(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="input-zone p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg mt-4">
      <label htmlFor="seed" className="block text-gray-700 dark:text-white">
        Semilla 1:
      </label>
      <input
        id="seed"
        type="text"
        value={seed}
        onChange={handleSeed}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-500 focus:border-blue-500 mt-1"
      />

      <label htmlFor="seed2" className="block text-gray-700 dark:text-white mt-2">
        Semilla 2:
      </label>
      <input
        id="seed2"
        type="text"
        value={seed2}
        onChange={handleSeed2}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-500 focus:border-blue-500 mt-1"
      />

      <label htmlFor="quantity" className="block text-gray-700 dark:text-white mt-2">
        Cantidad:
      </label>
      <input
        id="quantity"
        type="text"
        value={quantity}
        onChange={handleQuantity}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring focus:ring-blue-500 focus:border-blue-500 mt-1"
      />

      <button onClick={generate} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:border-blue-500">
        Generar
      </button>
    </div>
  );
};

export default ProductosMedios;
