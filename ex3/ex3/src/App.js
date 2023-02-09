import "./App.css";
import { useState } from "react";
import Boto from "./Components/Boto";
import Comptador from "./Components/Comptador"

function App() {
  const [edat, setEdat] = useState(0);
  const pujaEdat = () => {
    setEdat(edat + 1);
  };

  const baixaEdat = () => {
    setEdat(edat - 1);
  };

  const reset = () => {
    setEdat(0);
  };

  return (
    <div className="App">
      <Comptador counter={edat}/>
      <Boto funcio={pujaEdat} text="Incrementa" />
      <Boto funcio={baixaEdat} text="Decrementa" />
      <Boto funcio={reset} text="Reset" />

    </div>
  );
}

export default App;
