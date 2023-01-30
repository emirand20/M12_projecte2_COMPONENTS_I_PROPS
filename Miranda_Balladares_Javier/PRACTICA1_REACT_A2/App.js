import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <UserGrup name='Joan'></UserGrup>
          <UserGrup name='Javier'></UserGrup>
          <UserGrup name='Aitor'></UserGrup>

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
      {}<button>Submit</button>
    </div>
  )
}

export default App;
