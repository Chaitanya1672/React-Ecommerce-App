import React from "react";
import styles from "./categories.module.css";

const Category = ({ item }) => {
  return (
    <div className={styles.categorySection}>
      <img src={item.src} className={styles.categoryImg} alt="category_img" />
      <div className={styles.categoryDesc}>
        <h2 className={styles.categoryHeader}>{item.title}</h2>
        <button className={styles.btn}>See more</button>
      </div>
    </div>
  );
};

export default Category;
