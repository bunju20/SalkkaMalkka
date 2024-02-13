import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        dots: true,
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
                <img src="/img/card/AirPod.svg" alt="airpod" />
            </div>
            <div>
                <img src="/img/card/appleWatch.svg" alt="" />
            </div>
            <div>
                <img src="/img/card/iMac.svg" alt="" />
            </div>
            <div>
                <img src="/img/card/iPad.svg" alt="" />
            </div>
            <div>
                <img src="/img/card/iphonesvg.svg" alt="" />
            </div>
            <div>
                <img src="/img/card/macbookAir.svg" alt="" />
            </div>
            <div>
                <img src="/img/card/macbookPro.svg" alt="" />
            </div>
            <div>
                <img src="/img/card/macMini.svg" alt="" />
            </div>
        </Slider>
    );
}
