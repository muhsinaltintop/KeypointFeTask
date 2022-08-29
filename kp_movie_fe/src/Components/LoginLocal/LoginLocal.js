import React, { useRef } from "react";
import "./LoginLocal.css";
function LoginLocal() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = () => {
    //Login details are static now. Database connection required.

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
    </div>
  );
}
export default LoginLocal;
