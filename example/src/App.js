// import logo from './logo.svg';
// import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Switch, Prompt} from './router/index';
// import { BrowserRouter, Switch, Route, Link, Prompt} from 'react-router-dom';
import './App.css';
// import Effect from './components/effect'
// import ReduxPage from './components/reduxPage'
function Home() {
  return <div>Home</div>
}
function About() {
  return (
    <div>
      <div>About</div>

    <Prompt
      when={true}
      // message="Are you sure you want to leave?"
      message={(location) => {
        return "Are you sure you want to leave-fun";
      }}
    />
    </div>
  )
}
function About2() {
  return <div>About2</div>
}
function App() {
  // const [state, setState] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/about" component={About2} /> */}
          
        </Switch>
      </BrowserRouter>
      {/* <button onClick={() => setState(state+1)}>{state}</button>
      {state%2 && <Effect></Effect>} */}
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
