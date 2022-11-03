import React from "react";
import styles from "./newsletter.module.css";
import SendIcon from "@mui/icons-material/Send";

function Newsletter() {
  return (
    <div className={styles.newsletterDiv}>
      <h1 className={styles.header}>NEWSLETTER</h1>
      <h2 className={styles.description}>
        Always in touch with us, for yor favourite products
      </h2>
      <div className={styles.inputDiv}>
        <input type="email" placeholder="Email" className={styles.inp} />
        <button className={styles.btn}>
          <SendIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
