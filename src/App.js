import botc_logo from "./botc_logo.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={botc_logo} /*className="App-logo"*/ alt="logo" />
        <p>
          <div style={{
            'font-family': 'Creepster',
            'color': 'red',
            }}>
            Coming soon to Ravenswood Bluff.
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
