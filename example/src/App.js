// import logo from './logo.svg';
// import { useState, useEffect } from 'react'
// import { BrowserRouter, Route, Link, Switch, Prompt} from './router/index';
import { connect, Provider, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Link, Prompt, Redirect, useHistory, useLocation} from 'react-router-dom';
import store from './redux'
import './App.css';
import { useState } from 'react';
// import Effect from './components/effect'
// import ReduxPage from './components/reduxPage'
import Login from './components/Login'
import CustomRoute from './CustomRoute';
import Page from './components/Page';
import Commit from './components/Commit';
import { getCodeData } from './service/basedata';
import { Ref } from './components/Ref';
import SubMenu from './components/SubMenu';
import Lazy from './components/Lazy';
import Popover from './components/Popover';
import Home from './components/Home';
// function Home() {
//   const [visible, setVisible] = useState(false);
//   const onDismiss = (bol) => setVisible(bol);
//   return (
//     <div>
//       Home
     
//       <Ref></Ref>
//       <SubMenu></SubMenu>
//       <Lazy/>


//       <div className="space"></div>
//       <Popover placement="top" width="160" trigger="click" visible={visible} content={(
//         <div>
//           <p>这是一段内容这是一段内容确定删除吗？</p>
//           <div style={{textAlign: 'right', margin: 0}}>
//             <button onClick={() => onDismiss(false)}>取消</button>
//             <button onClick={() => onDismiss(true)}>确定</button>
//           </div>
//         </div>
//       )}>
//       <button>删除</button>
//     </Popover>
//     </div>
//   )
// }
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

function PrivateRoute(props) {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const {path, component: Component} = props;
  return <Route path={path} render={() => {
    return user.isLogin ? <Component {...props} /> : <Redirect to={{pathname:'/login',state:{redirectUrl: location.pathname}}}></Redirect>
  }}></Route>
}


function About2() {
  return <div>About2</div>
}
export const routes = [{
  path: "/home",
  exact: true,
  component: Home
},
{
  path: "/about",
  component: About,
  auth: PrivateRoute
},
{
  path: "/login",
  component: Login
},
{
  path: '/about2',
  component: About2
},
{
  path: '/page',
  component: Page
},
{
  path: '/commit',
  component: Commit
}
];


function App() {
  // const [state, setState] = useState(0);
  getCodeData(1001, 1002, 1003, 1000)
  .then(
    result => {
      console.log('codes', result);
    }
  )
  return (
    <Provider store={store}>
      <div className="App">
          <BrowserRouter>
            <Link className="link" to="/home">home</Link>
            <Link className="link" to="/login">login</Link>
            <Link className="link" to="/about">about</Link>
            <Link className="link" to="/about2">about2</Link>
            <Link className="link" to="/page">page</Link>
            <Link className="link" to="/commit">commit</Link>
            <Switch>
              <CustomRoute routes={routes} />
              {/* <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <PrivateRoute path="/about2" component={About2} /> */}
              {/* <Route path="/about2" component={About2} /> */}
              {/* <Route path="/about" component={About2} /> */}
              
            </Switch>
          </BrowserRouter>
      </div>
    </Provider>
    
      // {/* <button onClick={() => setState(state+1)}>{state}</button>
      // {state%2 && <Effect></Effect>} */}
      // {/* <ReduxPage></ReduxPage> */}
      // {/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}
  );
}

export default App;
