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
    <div className="input-zone">
      <label htmlFor="seed">Semilla:</label>
      <input id="seed" type="text" value={seed} onChange={handleSeed} />

      <br />
      <label htmlFor="a">a:</label>
      <input id="a" type="text" value={a} onChange={handleA} />

      <br />
      <label htmlFor="c">c:</label>
      <input id="c" type="text" value={c} onChange={handleC} />

      <br />
      <label htmlFor="m">m:</label>
      <input id="m" type="text" value={m} onChange={handleM} />

      <br />
      <button onClick={generate}>Generar</button>
    </div>
  );
};

export default Lineal;
