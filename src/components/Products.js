import React from "react";
import { ApiTopPropduct } from "../apifolder/TopProductsApi";
import Product from "./Product";
import styles from "./products.module.css";

function Products() {
  return (
    <div className={styles.productParentDiv}>
      {ApiTopPropduct.map((product, i) => (
        <Product item={product} key={i} />
      ))}
    </div>
  );
}

export default Products;
