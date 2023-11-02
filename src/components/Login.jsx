import React, {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import { Link, Navigate, redirect, useHistory, useNavigate } from 'react-router-dom'

function Login() {

  //const history = useHistory();
  let navigate = useNavigate();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

// const [form, setForm]=useState({
//   username:'',
//   password: ''
// });
//   const handleChange=e=>{
//  const {name, value} = e.target;
//  setForm({
//    ...form,
//    [name]: value
//  });
//   }

const iniciarSesion = async()=>{

    const url = "https://magaliabratte-001-site1.itempurl.com/api/cuentas/login"

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"email": username, "password": password})
    };

    console.log(requestOptions)
    await fetch(url, requestOptions)
    .then(response=>{
      console.log(response)
      if(!response.ok) {
      alert('Usuario inválido')
      } else {
      return response.json()
      }
    }).then(response=>{
      const { token, expiracion } = response;
      localStorage.setItem("token", token);
      navigate('/home')
    })

    .catch(error=>{
      console.log(error);
    })
  }

    return (
        <div className="container">
        <div className="container">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              value = {username}
              onChange={e => setUsername(e.target.value)}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <br />
            {/* <Link to= '/home' onClick={()=>iniciarSesion()}> Iniciar sesión</Link> */}
            <button className="btn btn-primary" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
}

export default Login;