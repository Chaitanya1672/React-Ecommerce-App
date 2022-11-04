import React from "react";
import Announce from "../components/Announce";
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
          <h1>Creamy Hoody Original</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem
          </p>
          <h3>Price :- $70</h3>
          <div>
            <h4>Colors </h4>
            <span className=""></span>
            <span>b</span>
            <span>r</span>
          </div>
          <h4>
            <span>Size</span>
            <select>
              <option selected disabled>
                Select
              </option>
              <option>l</option>
              <option>xl</option>
              <option>xxl</option>
            </select>
          </h4>
          <div>
            <h4>Quantity</h4>
            <div>
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
          </div>
          <button>Add Item</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
