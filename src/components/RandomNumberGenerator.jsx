import useStore from "./../store/Store";

import CuadradosMedios from "./CuadradosMedios";

const RandomNumberGenerator = () => {
  const method = useStore((state) => state.selectedMethod);
  const setMethod = useStore((state) => state.setSelectedMethod);

  return (
    <>
      <label htmlFor="method">Escoge un metodo: </label>
      <select
        name="method"
        id="method"
        value={method}
        onChange={(event) => setMethod(event.target.value)}
      >
        <option value="cuadrados medios">
          No Congruencial - Cuadrados Medios
        </option>
        <option value="productos medios">
          No Congruencial - Productos Medios
        </option>
        <option value="lineal">Congruencial - Lineal</option>
        <option value="multiplicativo">Congruencial - Multiplicativo</option>
      </select>
      {method === "cuadrados medios" ? (
        <CuadradosMedios />
      ) : method === "productos medios" ? (
        <></>
      ) : method === "lineal" ? (
        <></>
      ) : method === "multiplicativo" ? (
        <></>
      ) : (
        <></>
      )}
    </>
  );
};

export default RandomNumberGenerator;
