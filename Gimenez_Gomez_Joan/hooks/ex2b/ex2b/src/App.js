import { useState } from 'react';
import './App.css';

function App() {

  const [edat, setEdat] = useState(0);

  const pujaEdat = () => {
    setEdat(edat+1);
  }

  const baixaEdat = () => {
    setEdat(edat-1);
  }

  const reset = () => {
    setEdat(0);
  }

  return (
    <div className="App">
      {edat}
      <button onClick={pujaEdat}>increase</button>
      <button onClick={baixaEdat}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
