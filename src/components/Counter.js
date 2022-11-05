import React from "react";
import styles from "./counter.module.css";

function Counter() {
  return (
    <div>
      <div className={styles.quantityCounter}>
        Quantity
        <div className={styles.quantityHandle}>
          <span className={styles.countContoller}>-</span>
          <span className={styles.count}>1</span>
          <span className={styles.countContoller}>+</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;
