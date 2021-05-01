// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import Effect from './components/effect'
// import ReduxPage from './components/reduxPage'
function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setState(state+1)}>{state}</button>
      {state%2 && <Effect></Effect>}
      {/* <ReduxPage></ReduxPage> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
