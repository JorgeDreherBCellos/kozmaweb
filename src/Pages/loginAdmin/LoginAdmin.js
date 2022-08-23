import { useState } from 'react';
import kozmalogin from '../../assets/kozmalogin.png'
import '../Home/styles.css'
import { Route, Link } from 'react-router-dom'


function App() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className='login-form'>
            <span className="login-form-title">Painel Admin</span>
            <span className="login-form-title">
              <img src={kozmalogin} alt="Teste" />
            </span>

            <div className="wrap-input">
              <input 
                className={login !== "" ? 'has-val input' : 'input'}
                type="login"
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Login"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1"></span>

              <Link className="txt2" to="/">Painel Usuário</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
