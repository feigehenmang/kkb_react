import { useState } from "react"
import { connect, useSelector } from "react-redux"
import { LOGIN_REQUEST } from '../redux/const'
import { Redirect } from "react-router-dom"
import loginFn from '../redux/actions/login'
function Login(props) {
    const {location, history, match, user:{isLogin, isLoading, error}, login} = props;
    console.log(props)
  // console.log(location, history, match)
//   const {isLogin} = useSelector((state) => state.user)
  const [state, setState] = useState({name: '', password: ''})
  const changeState = (ev, key) => {
    setState({
      ...state,
      [key]: ev.target.value
    })
  }

  let {redirectUrl} = location.state || {};

  const handleClick = () => {
    // console.log(login)
    login(state);
  }
  if(isLogin) {
    redirectUrl = redirectUrl ? redirectUrl : '/home'
    return <Redirect to={redirectUrl}></Redirect>
  }
  return (<div>
    <h1>Login</h1>
    <div><input type="text" value={state.name} onChange={(event) => changeState(event, 'name')} /></div>
    <div><input type="password" value={state.password} onChange={(event) => changeState(event, 'password')}/></div>
    {error && <p>{error}</p>}
    <button onClick={handleClick}>{isLoading? 'loading....' : 'Login'}</button>
  </div>)
}
export default connect((state => ({user: state.user})), {login: (userInfo) => loginFn(userInfo)})(Login)