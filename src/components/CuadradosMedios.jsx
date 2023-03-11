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
    <>
      <div className="input-zone">
        <label htmlFor="seed">Semilla:</label>
        <input id="seed" type="text" value={seed} onChange={handleSeed} />
        <br />
        <label htmlFor="quantity">Cantidad</label>
        <input
          id="quantity"
          type="text"
          value={quantity}
          onChange={handleQuantity}
        />

        <br />
        <button onClick={generate}>Generar</button>
      </div>
    </>
  );
};

export default CuadradosMedios;
