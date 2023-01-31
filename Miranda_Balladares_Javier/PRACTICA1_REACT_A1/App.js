import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <UserGrup name='Joan' />
          <UserGrup name='Javier' />
          <UserGrup name='Aitor' />

        </div>
      </header>
    </div>
  );
}
const UserGrup = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <input placeholder='Surname'></input>
      { }<button>Submit</button>
    </div>
  )
}

export default App;
