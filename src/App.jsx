import RandomNumberGenerator from "./components/RandomNumberGenerator";

import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <h1>Generacion de numeros aleatorios</h1>
      <h3>
        Creado por Ignacio Illanes Bequer para la materia de Modelado, Dinamica
        y Simulacion de Sistemas
      </h3>
      <h4>Universidad Católica Boliviana "San Pablo" - Semestre I - 2023</h4>
      <RandomNumberGenerator />
    </div>
  );
};

export default App;
