import React, { useRef } from "react";
import Home from "../HomePage/HomePage.js";
import "./LoginLocal.css";
function LoginLocal() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  //   console.log(password.current.value.length, "pwrd");
  const handleSubmit = () => {
    if (
      email.current.value === "test@test.com" &&
      password.current.value === "123456"
    ) {
      localStorage.setItem("emailData", "test@test.com");
      localStorage.setItem("passwordData", "123456");
    }
  };
  return (
    <div>
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            ref={email}
            autoFocus
            required
          />
          <br />
          <label htmlFor="pwd">Password:</label>
          <br />
          <input
            type="password"
            id="pwd"
            name="pwd"
            ref={password}
            required
            minLength={6}
          />
          <br />
          <button>Login</button>
        </form>
      )}
    </div>
  );
}
export default LoginLocal;
