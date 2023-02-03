import Titol from "./Components/Titol";
import NomProfessio from "./Components/Nomprofessio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <br></br>
      <Titol />
        <NomProfessio nom='Oriol' professio='Pastisser' lorem='Lorem ipsum dolor si amet'/>
        <NomProfessio nom='Roger' professio='Flequer' lorem='consectetur adispicing elit'/>
        <br></br>
        <br></br>
    </div>
  );
}

export default App;