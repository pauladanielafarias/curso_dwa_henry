import { useState } from "react";
import "./SignUp.css";
import validation from "./validation";
import createUser from "./createUser";
import { useNavigate } from "react-router-dom";
import PATH_ROUTES from "../../helpers/pathRoutes";

const SignUp = (props) => {
  //Hook de react-router-dom que nos permite navegar entre rutas
  const navigate = useNavigate();

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

    const status = await createUser(userData);

    // Si el usuario se autentica con éxito
    if (status >= 200 && status < 300) {
      window.alert(
        "¡Usuario creado con éxito! Por favor, inicia sesión con tus credenciales."
      );
      navigate(PATH_ROUTES.LOGIN);
    } else {
      if (status === 409) {
        window.alert(
          "El usuario ya existe. Por favor, inicia sesión con tus credenciales."
        );
        navigate(PATH_ROUTES.LOGIN);
      } else {
        window.alert("¡Ocurrió un error! Por favor, intentá nuevamente.");
      }
    }
  };

  return (
    <div className="signup">
      <h1 className="title">Bienvenidos a Rick and Morty App</h1>
      <h2>Sign Up</h2>
      <form action="/login" onSubmit={handleSubmit}>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
