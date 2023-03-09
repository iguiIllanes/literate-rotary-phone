import RandomNumberGenerator from "./components/RandomNumberGenerator";

import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <h1>Generacion de numeros aleatorios</h1>
      <h3>
        Creado por Ignacio Illanes Bequer para la materia de Modelado, Dinamica
        y Simulacion de Sistemas - Semestre I-2023
      </h3>
      <RandomNumberGenerator />
    </div>
  );
};

export default App;
