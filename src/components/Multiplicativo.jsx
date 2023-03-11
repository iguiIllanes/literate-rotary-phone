import useStore from "../store/Store";

const Multiplicativo = () => {
  const seed = useStore((state) => state.seed);
  const setSeed = useStore((state) => state.setSeed);

  const a = useStore((state) => state.a);
  const setA = useStore((state) => state.setA);

  const m = useStore((state) => state.m);
  const setM = useStore((state) => state.setM);

  const generate = useStore((state) => state.generate);

  const handleSeed = (e) => {
    setSeed(e.target.value);
  };

  const handleA = (e) => {
    setA(e.target.value);
  };

  const handleM = (e) => {
    setM(e.target.value);
  };

  return (
    <div className="input-zone">
      <label htmlFor="seed">Semilla:</label>
      <input id="seed" type="text" value={seed} onChange={handleSeed} />

      <br />
      <label htmlFor="a">a:</label>
      <input id="a" type="text" value={a} onChange={handleA} />

      <br />
      <label htmlFor="m">m:</label>
      <input id="m" type="text" value={m} onChange={handleM} />

      <br />
      <button onClick={generate}>Generar</button>
    </div>
  );
};

export default Multiplicativo;
