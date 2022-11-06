import React, { useState } from "react";
import styles from "./login.module.css";

function Login() {
  const [isUsername, setIsUsername] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const usernameChangeHandler = (e) => {
    setIsUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setIsPassword(e.target.value);
  };
  const submitHandler = () => {
    if (isUsername.length && isPassword.length > 0) {
      console.log(isUsername, isPassword);
      alert(isUsername, isPassword);
    } else {
      alert("Please insert valid details");
    }
  };
  return (
    <div className={styles.loginModal}>
      <h2 className={styles.title}>Sign In</h2>
      <div className="mb-2">
        <div className={styles.inputDiv}>
          <h4 className="text-white">Username</h4>
          <input
            name="text"
            type="text"
            placeholder="Username"
            className={styles.inp}
            value={isUsername}
            onChange={usernameChangeHandler}
            required
          />
        </div>
        <div className={styles.inputDiv}>
          <h4 className="text-white">Password</h4>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={styles.inp}
            value={isPassword}
            onChange={passwordChangeHandler}
            required
          />
        </div>
      </div>
      <button className={styles.btn} onClick={submitHandler}>
        Login
      </button>
    </div>
  );
}

export default Login;
