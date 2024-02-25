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
                    src="/img/card/Group 341.jpg"
                    alt="Group 341"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 342.jpg"
                    alt="Group 342"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 343.jpg"
                    alt="Group 343"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 344.jpg"
                    alt="Group 344"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 345.jpg"
                    alt="Group 345"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 346.jpg"
                    alt="Group 346"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 347.jpg"
                    alt="Group 347"
                    className={styles.img__card}
                />
            </div>
            <div>
                <img
                    src="/img/card/Group 348.jpg"
                    alt="Group 348"
                    className={styles.img__card}
                />
            </div>
        </Slider>
    );
}
