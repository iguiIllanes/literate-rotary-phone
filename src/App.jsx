import RandomNumberGenerator from "./components/RandomNumberGenerator";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <header className="bg-blue-500 dark:bg-blue-800 p-4">
        <h1 className="text-3xl text-white">Generación de números pseudoaleatorios</h1>
      </header>
      <main className="container mx-auto py-8">
        <h3 className="text-xl">
          Creado por Ignacio Illanes Bequer para la materia de Modelado, Dinámica
          y Simulación de Sistemas
        </h3>
        <h4 className="text-lg">
          Universidad Católica Boliviana "San Pablo" - Semestre II - 2023
        </h4>
        <RandomNumberGenerator />
      </main>
    </div>
  );
};

export default App;
