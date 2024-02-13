import React from "react";
import styles from "./slider.module.css";
import SimpleSlider from "./simpleSlider";

const SliderScreen = () => {
    return (
        <div className={styles.wrap__all}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <SimpleSlider className={styles.slider__slider} />
                </div>
            </div>
        </div>
    );
};

export default SliderScreen;
