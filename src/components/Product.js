import React from "react";
import styles from "./products.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";

function Product({ item }) {
  return (
    <div className={styles.productsSection}>
      <img src={item.src} alt="Products" className={styles.Img} />
      <div className={styles.iconDiv}>
        <div className={styles.productIcon}>
          <ShoppingCartIcon />
        </div>
        <div className={styles.productIcon}>
          <FavoriteBorderIcon />
        </div>
        <div className={styles.productIcon}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Product;
