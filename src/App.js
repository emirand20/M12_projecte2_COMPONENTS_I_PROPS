import Titol from "./Components/Titol";
import NomProfessio from "./Components/Nomprofessio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Titol />
      <NomProfessio nom='Roger' professio='Pastisser' lorem='Lorem ipsum dolor si amet'/>
      <NomProfessio nom='Oriol' professio='Flequer' lorem='consectetur adispicing elit'/>
      <NomProfessio nom='Joan' professio='Panader' lorem='que te parece'/>
    </div>
  );
}

export default App;