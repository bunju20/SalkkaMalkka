import React from "react";
import styles from "./slider.module.css";
import SimpleSlider from "./simpleSlider";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SliderScreen = () => {
    const location = useLocation();
    const finalMbti = location.state.finalMbti;

    return (
        <div className={styles.wrap__all}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.result__city}>테스트 완료!</h1>
                    <SimpleSlider />
                    <Link
                        to={`/result/${finalMbti}`}
                        className={styles.start__button}
                    >
                        <div className={styles.button__wrap}>
                            <p className={styles.second}>
                                쿠팡 방문하고 환생결과 확인하기
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SliderScreen;
