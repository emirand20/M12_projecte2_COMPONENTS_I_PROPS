import Titol from "./Components/Titol";
import NomProfessio from "./Components/Nomprofessio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Titol />
      <NomProfessio nom="Roger" professio="Pastisser" />
      <p>Lorem ipsum dolor si amet</p>
      

      <NomProfessio nom="Oriol" professio="Flequer" />
      <p>consectetur adispicing elit </p>
    </div>
  );
}

export default App;