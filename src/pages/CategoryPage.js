import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div>
        <h1>Men's Cloth</h1>
        <div>
          <div>
            <p>Filter By:-</p>
            <select>
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select>
              <option selected disabled>
                Color
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
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
