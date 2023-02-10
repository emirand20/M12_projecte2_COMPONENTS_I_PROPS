import './App.css';
import { useState } from 'react';

function App() {

  const [estat, setEstat] = useState(true);

  const ocultamostra = () => setEstat(!estat);

  return (
    <div>
      <button onClick={ocultamostra}>Show/hide</button>
      {estat && <p>El text es mostra</p>}
    </div>
  );
}

export default App;
