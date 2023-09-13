import useStore from "./../store/Store";
import CuadradosMedios from "./CuadradosMedios";
import Lineal from "./Lineal";
import Multiplicativo from "./Multiplicativo";
import ProductosMedios from "./ProductosMedios";
import RandomNumberTable from "./RandomNumberTable";

const RandomNumberGenerator = () => {
  const method = useStore((state) => state.selectedMethod);
  const setMethod = useStore((state) => state.setSelectedMethod);

  return (
    <>
      <label htmlFor="method" className="block text-gray-700 dark:text-white">
        Escoge un método:
      </label>
      <select
        name="method"
        id="method"
        value={method}
        onChange={(event) => setMethod(event.target.value)}
        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 mt-1 block w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
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
        <ProductosMedios />
      ) : method === "lineal" ? (
        <Lineal />
      ) : method === "multiplicativo" ? (
        <Multiplicativo />
      ) : (
        <></>
      )}

      <RandomNumberTable />
    </>
  );
};

export default RandomNumberGenerator;
