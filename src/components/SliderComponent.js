import React, { useState } from "react";
import styles from "./Slider.module.css";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ApiSlides } from "../apifolder/SliderApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent() {
  const [slides] = useState(ApiSlides);

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    className: "arrows",
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className={slide.background}>
            <div className={styles.bannerSlide}>
              <div>
                <img src={slide.src} className={styles.Img} alt="Hero Banner" />
              </div>
              <div>
                <h2 className="text-[55px]">{slide.content.h2}</h2>
                <p className="text-[30px] mb-2">{slide.content.p}</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    // <div className={styles.parentSlider}>
    //   {/* //left Div */}
    //   <div
    //     className={`hover:shadow-2xl ${styles.sliderArr}`}
    //     onClick={slideArrowHandle}
    //   >
    //     <ArrowBackIosNewIcon />
    //   </div>

    //   {/* //slider Div */}
    //   {slides.map((slide, i) => {
    //     if (i === activeSlide) {
    //       return (
    //         <div className={`${slide.background} ${styles.sliderDiv}`} key={i}>
    //           <div className={styles.slide}>
    //             <div className={styles.slideDivBannerImg}>
    //               <img
    //                 className={`${styles.slideImg}`}
    //                 src={slide.src}
    //                 alt="Hero Banner"
    //               />
    //             </div>
    //             <div className={styles.slideDivBannerDisc}>
    //               <h2 className="text-[55px]">{slide.content.h2}</h2>
    //               <p className="text-[30px] mb-2">{slide.content.p}</p>
    //               <button className={styles.btn}>Shop Now</button>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     }
    //   })}

    //   {/* //right Div */}
    //   <div
    //     className={`hover:shadow-2xl ${styles.sliderArr}`}
    //     onClick={slideArrowHandle}
    //   >
    //     <ArrowForwardIosIcon />
    //   </div>
    // </div>
  );
}

export default SliderComponent;
