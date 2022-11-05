import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styles from "./cart.module.css";
import Counter from "../components/Counter";

function CartPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="mb-7">
        <h1 className={styles.cartTitle}>Cart</h1>
        <div className={styles.cartNavigation}>
          <button className={styles.shoppingBtn}>Continue Shopping</button>
          <div className={styles.inventoryCount}>
            <p>Items in your Cart : 1</p>
            <p>Wishlist Item : 0</p>
          </div>
          <button className={styles.btn}>Checkout</button>
        </div>

        <div className="flex mt-7 pr-5 pl-5">
          <div className="flex flex-col flex-1">
            <div className={styles.productDiv}>
              <div className={styles.imgWithDesc}>
                <img
                  className={styles.img}
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product-img"
                />
                <div className={styles.description}>
                  <p>
                    <b>ID : </b>124566
                  </p>
                  <p>
                    <b>Prducts : </b>Dazling Sky Shirt
                  </p>
                  <p className="flex item-center gap-2">
                    <b>Color : </b>
                    <div className={`bg-sky-500  ${styles.color}`}></div>
                  </p>
                  <p>
                    Size : <b>large</b>
                  </p>
                </div>
              </div>
              <div className={styles.counter}>
                <Counter />
                <p className={styles.price}>
                  <b>$ 70</b>
                </p>
              </div>
            </div>
            <hr className="mb-7 mt-7"></hr>
            <div className="flex flex-col flex-1">
              <div className={styles.productDiv}>
                <div className={styles.imgWithDesc}>
                  <img
                    className={styles.img}
                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                    alt="product-img"
                  />
                  <div className={styles.description}>
                    <p>
                      <b>ID : </b>124566
                    </p>
                    <p>
                      <b>Prducts : </b>Dazling Sky Shirt
                    </p>
                    <p className="flex item-center gap-2">
                      <b>Color : </b>
                      <div className={`bg-sky-500  ${styles.color}`}></div>
                    </p>
                    <p>
                      Size : <b>large</b>
                    </p>
                  </div>
                </div>
                <div className={styles.counter}>
                  <Counter />
                  <p className={styles.price}>
                    <b>$ 70</b>
                  </p>
                </div>
              </div>
              <hr className="mb-7 mt-7"></hr>
            </div>
          </div>
          <div className={styles.summary}>
            <h1 className="text-[2rem] mb-2">Summary</h1>
            <div className={styles.summaryPrices}>
              <p>Subtotal:-</p>
              <p>$140</p>
            </div>
            <div className={styles.summaryPrices}>
              <p>Shipping:-</p>
              <p>$40</p>
            </div>
            <div className={styles.summaryPrices}>
              <p>Shipping Discount:-</p>
              <p>-$40</p>
            </div>
            <div className={styles.totalPrice}>
              <p>Total:-</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CartPage;
