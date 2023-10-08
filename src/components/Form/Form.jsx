import { useState } from "react";
import "./Form.css";
import validation from "./validation";

const Form = (props) => {
  //Hook de estado que nos permite guardar los datos del usuario
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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

  return (
    <div className="login">
      <h2>Login</h2>
      <form action="/home">
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
          {errors.email && <p className="error">{errors.email}</p>}
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
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
          <button className="submit-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
