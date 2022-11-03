import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import SliderComponent from "../components/SliderComponent";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <SliderComponent />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
}

export default Home;
