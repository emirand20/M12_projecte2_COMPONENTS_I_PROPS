import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <User/>
      <Text_Info/><br></br>
    </div>
  );
}


  const User = () =>{
    return (
      <div>
        <h1>Aitor Monge</h1>
        <h1>Eduard Miranda</h1>
        <h1>Joan Gimenez</h1>
      </div>
    );
  };


  const Text_Info = () =>{
    return (
      <div>
        <input placeholder='Escriu la edat dels membres del grup'></input>
      </div>
    )
  }


export default App;
