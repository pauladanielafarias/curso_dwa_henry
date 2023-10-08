
import "./Form.css";


const Form = (props) => {
  
  return (
    <div className="login">
      <h2>Login</h2>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
