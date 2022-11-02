import React from "react";
import { ApiCategories } from "../apifolder/CategoryApi";
import Category from "./Category";
import styles from "./categories.module.css";
const Categories = () => {
  return (
    <div className={styles.parentDiv}>
      {ApiCategories.map((category, index) => (
        <Category item={category} key={index} />
      ))}
    </div>
  );
};

export default Categories;
