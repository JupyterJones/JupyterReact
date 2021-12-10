import logo from './jahral.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Game of Thrones Data on JahRal. 
        </p>
        <p>  Game of Thrones Winter is Coming
        </p>
        <a
          className="App-link"
          href="https://got.gtarcade.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Of Thrones Webpage
        </a>
      </header>
    </div>
  );
}

export default App;
