import axios from "axios";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [cargando, setCargando] = useState(false);

  const [error, setError] = useState();

  const submit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null)
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setCargando(false);
        console.log(data);
        localStorage.setItem("tokenEDmarket", data.data.token);
        navigation("/");
      })
      .catch((e) => {
        setCargando(false);
        console.error(e);
        setError(e.response.data.error);
      });
  };
  //navigate te redirije si en localstorage hay el token tokenedmarket
  if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <h1>Iniciar Sesion</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Coreo Electronico</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            type="text"
            name="mail"
          />
        </div>
        <div className="field">
          <label htmlFor="">Contraseña</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={cargando ? "cargando..." : "Ingresar"}
            className="link"
          />
        </div>
      </form>
      {error && <span className="error">Error: {error}</span>}
    </div>
  );
};

export default Login;
