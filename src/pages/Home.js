import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import SliderComponent from "../components/SliderComponent";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <SliderComponent />
    </div>
  );
}

export default Home;
