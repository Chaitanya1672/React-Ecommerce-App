import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styles from "./productpage.module.css";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className={styles.parentDiv}>
        <div className={styles.imgDiv}>
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
            alt="Selected-Image"
          />
        </div>
        <div className={styles.productOption}>
          <h1 className="text-[40px]">Creamy Hoody Original</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum !
          </p>
          <p className="mt-4 text-3xl">
            Price :-<b>$70</b>
          </p>
          <div className={styles.colorSec}>
            <p className={styles.colorSecTitle}>Colors :-</p>
            <span className={`bg-red-600  ${styles.colorBlock}`}></span>
            <span className={`bg-blue-600 ${styles.colorBlock}`}></span>
            <span className={`bg-green-600 ${styles.colorBlock}`}></span>
          </div>
          <div className={`mt-4 ${styles.sizeDiv}`}>
            <span className="mr-4">Size</span>
            <select className={styles.sizeSelector}>
              <option selected disabled>
                Select
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <Counter />
          <button className={styles.btn}>Add Item</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
