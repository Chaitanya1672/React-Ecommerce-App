import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import SliderComponent from "../components/SliderComponent";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <SliderComponent />
      <Categories />
    </div>
  );
}

export default Home;
