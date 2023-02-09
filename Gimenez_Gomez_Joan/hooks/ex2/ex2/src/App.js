import { useState } from 'react';
import './App.css';

function App() {

  const [edat, setEdat] = useState(0);

  const pujaEdat = () => {
    setEdat(edat+1);
  }

  return (
    <div className="App">
      {edat}<button onClick={pujaEdat}>Augmenta edat</button>
    </div>
  );
}

export default App;
