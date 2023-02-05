import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Grup  grup='Daw 2'/>
        </div>
        <div>
          <UserGrup name='Joan' surname=' Gimenez' />
          <UserGrup name='Javier' surname=' Miranda' />
          <UserGrup name='Aitor' surname=' Monge' />
        </div>
      </header>
    </div>
  );
}
const UserGrup = (props) => {
  return (
    <div>
      <h1>{props.name}{props.surname}</h1>
      <input placeholder='Surname'></input>
      <button>Submit</button>
    </div>
  )
}

const Grup = (props) => {
  return (
    <div>
      <h2>{props.grup}</h2>
    </div>
  )
}

export default App;
