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
    <>
      <div className="input-zone">
        <label htmlFor="seed">Semilla 1:</label>
        <input id="seed" type="text" value={seed} onChange={handleSeed} />

        <label htmlFor="seed2">Semilla 2:</label>
        <input id="seed2" type="text" value={seed2} onChange={handleSeed2} />

        <label htmlFor="quantity">Cantidad:</label>
        <input
          id="quantity"
          type="text"
          value={quantity}
          onChange={handleQuantity}
        />

        <button onClick={generate}>Generar</button>
      </div>
    </>
  );
};

export default ProductosMedios;
