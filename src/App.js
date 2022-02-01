import logo from './logo.png';
import './App.css';
import Tabs from './components/Tabs'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Ejercicio todo junto - React </h1>
      </header>

      <Tabs/>

    </div>
  );
}

export default App;
