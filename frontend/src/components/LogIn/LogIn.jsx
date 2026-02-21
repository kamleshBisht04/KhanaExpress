import { useState } from "react";
import "./Login.css";
import useStore from "../../context/useStore";
import Logo from "../Logo/Logo";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setShowLogin } = useStore();
  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login">
      <div className="login-container">
        <Logo
          onClick={() => {
            setShowLogin(false);
            navigate("/");
          }}
        />
        <h2>{isSignup ? "Create Account " : "Welcome to Eatigo"}</h2>
        <button className="close-btn" onClick={() => setShowLogin(false)}>
          <IoClose className="close" />
        </button>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {isSignup && (
            <div className="terms-checkbox">
              <input type="checkbox" required />
              <p>
                I agree to the <span>Terms of Use</span> & <span>Privacy Policy</span>
              </p>
            </div>
          )}
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>{isSignup ? " Login" : " Sign Up"}</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
