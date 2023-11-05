import { useState } from "react";
import "./Login.css";
import validation from "./validation";
import auth from "./authorization";
import { Link, useNavigate } from "react-router-dom";
import PATH_ROUTES from "../../helpers/pathRoutes";

const Login = (props) => {
  //Hook de estado que nos permite guardar los datos del usuario
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  //Hook de estado que nos permite guardar los errores de validación
  const [errors, setErrors] = useState({});

  //Hook de estado que nos permite guardar si el usuario está autorizado
  const [authorized, setAuthorized] = useState(false);

  /**
   * Función que se ejecuta cuando se modifica un input
   * @param {Event} e - evento que se ejecuta cuando se modifica un input
   */
  const handleChange = (e) => {
    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Función que se ejecuta cuando se hace un submit
   * @param {Event} e - evento que se ejecuta cuando se hace un submit
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {authorized, status} = await auth(userData);

    // Si el usuario se autentica con éxito
    if (authorized) {
      // Llama a la función onLogin pasada desde el componente App
      props.onLogin();

      // Establece el estado de autorización en verdadero
      setAuthorized(true);
    }
    else {
      if (status === 404) { 
        window.alert("El usuario no existe. Por favor, registrate.");
      }
      else if (status === 401) {
        window.alert("¡Contraseña incorrecta!");
      }
      else {
        window.alert("¡Ocurrió un error! Por favor, intentá nuevamente.");
      }
    }

  };

  return (
    <div className="login">
      <h1 className="title">Bienvenidos a Rick and Morty App</h1>
      <h2>Login</h2>
      <form action="/home" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            required
          />
          {errors.email?.length > 0 && (
            <ul className="error">
              {errors.email.map((error, index) => (
                <li key={index} className="error-item">
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={userData.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            required
            autoComplete="off"
          />
          {errors.password?.length > 0 && (
            <ul className="error">
              {errors.password.map((error, index) => (
                <li key={index} className="error-item">
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="submit-btn" type="submit">
          Login
        </button>
      </form>
      <p>
        <Link to={PATH_ROUTES.SIGNUP}>Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
