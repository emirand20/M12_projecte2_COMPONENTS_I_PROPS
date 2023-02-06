import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <User name="Aitor" surname="Monge"/>
      <User name="Eduard" surname="Miranda"/>
      <User name="Joan" surname="Gimenez"/>
      <Barra placeholder="Escriu la edat dels membres"/>
    </div>
  );
}

  const User = (props) =>{
    return (
      <div>
        <h1>{props.name} {props.surname}</h1>
      </div>
    );
  };


  const Barra = (props) =>{
    return (
      <div>
        <input placeholder='{props.placeholder}'></input>
      </div>
    );
  };


export default App;