import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import styles from "./categoryPage.module.css";

function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className={styles.categoryParentDiv}>
        <h1 className="text-[30px]">Men's Cloth</h1>
        <div className={styles.categorySections}>
          <div className={styles.firstCateorySection}>
            <p>Filter By:-</p>
            <select className={styles.sizeSection}>
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className={styles.sizeSection}>
              <option selected disabled>
                Color
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort By</p>
            <select className={styles.sortBySection}>
              <option>Newest (first)</option>
              <option>Oldest (first)</option>
              <option>Price (Asc)</option>
              <option>Price (Desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
