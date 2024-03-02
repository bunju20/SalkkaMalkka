import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../home/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KakaoBtn from "../shareSNS/kakaoShareButton";
import FacebookBtn from "../shareSNS/facebookShareButton";
import TwitterBtn from "../shareSNS/twitterShareButton";
import {
    faCopy,
    faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";
import { setFinalPage, setUid } from "../../features/dataSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { sendDataToSpreadsheet } from "../../common/api/sendDate";

const Home = () => {
    const uniqueID = uuidv4();
    const dispatch = useDispatch();
    const url = window.location.href; // url 복사
    const copyAlert = () => {
        alert("링크 생성!");
    };
    dispatch(setUid(uniqueID));

    return (
        <div className={styles.wrap__all}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <img
                            className={styles.logo}
                            src="img/start/first_title.svg"
                            alt="로고"
                        />
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>
                            내가 애플 재품으로 환생한다면?
                            <br />
                            ChatGPT로 정확도를 높인 애플시티를 향한 모험
                        </h2>
                    </div>

                    <Link to="/onboarding" className={styles.start__button}>
                        <div className={styles.button__wrap}>
                            <p className={styles.first}>3126 번 째로</p>
                            <p className={styles.second}>
                                애플시티 모험 시작하기
                            </p>
                        </div>
                    </Link>
                    <h1 className={styles.result__share}>
                        테스트결과 공유하기
                    </h1>
                    <div className={styles.shareBox}>
                        <KakaoBtn />
                        <FacebookBtn />
                        <TwitterBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
