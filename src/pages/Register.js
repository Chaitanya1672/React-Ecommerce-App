import React, { useState } from "react";
import styles from "./register.module.css";

function Register() {
  const [firstname, setIsFirstname] = useState("");
  const [lastname, setIsLastname] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isUsername, setIsUsername] = useState("");
  const [confirm, setConfirm] = useState(false);

  const firstnameChangeHandler = (e) => {
    setIsFirstname(e.target.value);
  };
  const lastnameChangeHandler = (e) => {
    setIsLastname(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setIsPassword(e.target.value);
  };
  const usernameChangeHandler = (e) => {
    setIsUsername(e.target.value);
  };

  const submitHandler = () => {
    if (firstname.length && isPassword.length > 0) {
      console.log(firstname, lastname);
      alert(firstname, lastname);
    } else {
      alert("Please insert valid details");
    }
  };
  return (
    <div>
      <div className={styles.loginModal}>
        <h2 className={styles.title}>Register </h2>
        <div className="mb-2">
          <div className="flex justify-center gap-1 mb-2">
            <div className={styles.nameInput}>
              <h4 className="text-white m-auto">First Name</h4>
              <input
                name="text"
                type="text"
                placeholder="First Name"
                className={styles.inp}
                value={firstname}
                onChange={firstnameChangeHandler}
                required
              />
            </div>
            <div className={styles.nameInput}>
              <h4 className="text-white m-auto">Last Name</h4>
              <input
                name="text"
                type="text"
                placeholder="Last Name"
                className={styles.inp}
                value={lastname}
                onChange={lastnameChangeHandler}
                required
              />
            </div>
          </div>
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
    </div>
  );
}

export default Register;
