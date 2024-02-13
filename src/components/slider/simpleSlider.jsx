import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1600,
        slidesToShow: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <img
                    src="/img/card/Group 341.svg"
                    alt="Group 341"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 342.svg"
                    alt="Group 342"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 343.svg"
                    alt="Group 343"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 344.svg"
                    alt="Group 344"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 345.svg"
                    alt="Group 345"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 346.svg"
                    alt="Group 346"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 347.svg"
                    alt="Group 347"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 348.svg"
                    alt="Group 348"
                    className={styles.img__card}
                />
            </div>
        </Slider>
    );
}
