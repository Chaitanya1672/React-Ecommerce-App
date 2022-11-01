import React from "react";
import styles from "./Slider.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AirplayIcon from "@mui/icons-material/Airplay";

function Slider() {
  return (
    <div className={styles.parentSlider}>
      {/* //left Div */}
      <div className={`hover:shadow-2xl ${styles.sliderArr}`}>
        <ArrowBackIosNewIcon />
      </div>

      {/* //slider Div */}
      <div className={styles.sliderDiv}>
        <div className={styles.slide}>
          <div className={styles.slideDiv1}>
            <img
              className={`${styles.slideImg}`}
              src="https://image.freepik.com/free-photo/happy-woman-shopping-with-shopping-bags_1150-20495.jpg"
              alt="Hero Banner"
            />
          </div>
          <div>
            <h2>hi there bbsdzvbv vskvsk bkbkkbdk dbbbd kbbsbs bdb </h2>
            <p>Upto 40% off</p>
          </div>
        </div>
      </div>

      {/* //right Div */}
      <div className={`hover:shadow-2xl ${styles.sliderArr}`}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Slider;
