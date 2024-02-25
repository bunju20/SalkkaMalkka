import React from "react";
import styles from "./slider.module.css";
import SimpleSlider from "./simpleSlider";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Countries from "../../common/api/countriesApi.json";

const SliderScreen = () => {
    const history = useHistory();
    const location = useLocation();
    const finalMbti = location.state.finalMbti;
    const handleButtonClick = () => {
        let curUrl = Countries[finalMbti].url;

        // 새 탭에서 쿠팡 링크 열기
        window.open(curUrl, "_blank", "noopener,noreferrer");
        // 동시에 앱 내부에서 /result/경로로 이동
        history.push(`/result/${finalMbti}`);
    };

    return (
        <div className={styles.wrap__all}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.result__city}>테스트 완료!</h1>
                    <SimpleSlider />
                    <button
                        className={styles.start__button}
                        onClick={handleButtonClick}
                    >
                        <div className={styles.button__wrap}>
                            <p className={styles.second}>
                                쿠팡 방문하고 환생결과 확인하기
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SliderScreen;
