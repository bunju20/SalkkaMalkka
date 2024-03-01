import React, { useState, useEffect } from "react";
import styles from "./countries.module.css";
import Countries from "../../common/api/countriesApi/../countriesApi";
import palaette from "../../lib/styles/colorPalatte.js";
import KakaoBtn from "../shareSNS/kakaoShareButton";
import FacebookBtn from "../shareSNS/facebookShareButton";
import TwitterBtn from "../shareSNS/twitterShareButton";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFinalPage, setCoupangButton } from "../../features/dataSlice";

const Profile = ({ match }) => {
    const SALMAL_API = process.env.REACT_APP_SALMAL_API;
    const location = useLocation();
    const history = useHistory();
    const finalMbti = location.state.finalMbti;

    const [isLocked, setIsLocked] = useState(true); // 스크롤 제어 및 그라데이션 효과 제어를 위한 상태
    const { countryName } = match.params;
    const nation = Countries[countryName];
    let mainColor, colorLight;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const sendDataToSpreadsheet = async (data) => {
        try {
            const response = await fetch(SALMAL_API, {
                method: "POST", // HTTP 요청 메서드 설정
                headers: {
                    "Content-Type": "application/json", // 내용 유형을 JSON으로 설정
                },
                mode: "no-cors",
                body: JSON.stringify(data),
            });

            const jsonResponse = await response.json(); // 응답 본문을 JSON으로 파싱
            console.log("Success:", jsonResponse); // 성공 응답 로그 출력
        } catch (error) {
            console.error("Error:", error); // 오류 로그 출력
        }
    };

    const handleButtonClick = () => {
        let curUrl = Countries[finalMbti].url;
        window.open(curUrl, "_blank", "noopener,noreferrer");
        handleUnlock(); // 버튼 클릭 시 스크롤 가능하게 변경
        dispatch(setFinalPage(`/result/final`));
        dispatch(setCoupangButton(true));
    };

    useEffect(() => {
        console.log(JSON.stringify(data)); // 상태가 업데이트된 후에 실행될 로직
        sendDataToSpreadsheet(data);
    }, [data]); // data 상태를 의존성 배열에 추가하여 data 상태가 변경될 때마다 이 useEffect가 실행되도록 함

    useEffect(() => {
        if (isLocked) {
            // 스크롤 방지
            document.body.style.overflow = "hidden";
        } else {
            // 스크롤 가능
            document.body.style.overflow = "auto";
        }
    }, [isLocked]);

    const handleUnlock = () => {
        setIsLocked(false); // 상태 업데이트로 스크롤 가능하게 변경 및 그라데이션 제거
    };

    if (!nation) {
        return <div>존재하지 않는 결과입니다.</div>;
    }

    // 스타일 및 색상 설정은 기존 로직 사용
    // eslint-disable-next-line default-case
    switch (nation.subhead) {
        case "MacBook Pro":
            mainColor = palaette.MacBookPro;
            colorLight = palaette.MacBookPro_ligth;
            break;
        case "AirPods":
            mainColor = palaette.AirPods;
            colorLight = palaette.AirPods_light;
            break;
        case "iPhone":
            mainColor = palaette.iPhone;
            colorLight = palaette.iPhone_light;
            break;
        case "iPad":
            mainColor = palaette.iPad;
            colorLight = palaette.iPad_light;
            break;
        case "iMac":
            mainColor = palaette.iMac;
            colorLight = palaette.iMac_light;
            break;
        case "MacBook Air":
            mainColor = palaette.MacBookAir;
            colorLight = palaette.MacBookAir_light;
            break;
        case "Apple Watch":
            mainColor = palaette.AppleWatch;
            colorLight = palaette.AppleWatch_light;
            break;
        case "Mac mini":
            mainColor = palaette.MacMini;
            colorLight = palaette.MacMini_ligth;
            break;
    }

    return (
        <div className={styles.wrap__all}>
            <div className={styles.wrapper} key={nation.id}>
                <div className={styles.container}>
                    <div className={styles.header}></div>
                    <img
                        src={nation.img}
                        alt="img"
                        className={styles.main__img}
                    />
                    <div className={styles.result__type}>
                        <h1
                            className={styles.result__city}
                            style={{ color: mainColor }}
                        >
                            {nation.subhead}
                        </h1>
                        <h1
                            className={styles.result__device_detail}
                            style={{ color: mainColor }}
                        >
                            {nation.subject}
                        </h1>
                        <br />
                    </div>
                    <div className={styles.tagsContainer}>
                        <div
                            className={styles.tag}
                            style={{ backgroundColor: colorLight }}
                        >
                            <span style={{ color: mainColor }}>
                                {nation.mbtitag}
                            </span>
                        </div>
                        <div
                            className={styles.tag}
                            style={{
                                width: "226px",
                                backgroundColor: colorLight,
                            }}
                        >
                            <span style={{ color: mainColor }}>
                                {nation.hashtag}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`${styles.result__list__box} ${
                            isLocked ? styles.locked : ""
                        }`}
                    >
                        <ul className={styles.result__style__wrapper}>
                            {nation.description.map((item) => {
                                return (
                                    <li
                                        className={styles.result__style__detail}
                                        key={item.des}
                                    >
                                        {item.des}
                                    </li>
                                );
                            })}
                        </ul>
                        {isLocked && (
                            <button
                                className={styles.start__button}
                                onClick={handleButtonClick}
                            >
                                <div className={styles.button__wrap}>
                                    <p className={styles.second}>
                                        쿠팡 방문하고 마저 읽기
                                    </p>
                                </div>
                            </button>
                        )}
                    </div>

                    <div className={styles.result__advice__box}>
                        <div className={styles.result__advice}>
                            <h4 style={{ color: mainColor }}>환상의 조합</h4>
                            <img
                                src={nation.duo[0].img}
                                alt="mbti캐릭터"
                                Link="/"
                            />
                            <p>{nation.duo[0].subhead}</p>
                        </div>
                        <div className={styles.result__advice}>
                            <h4>환장의 조합</h4>
                            <img
                                src={nation.counter[0].img}
                                alt="mbti캐릭터"
                                Link="/"
                            />
                            <p>{nation.counter[0].subhead}</p>
                        </div>
                    </div>
                    <h1
                        className={styles.result__share}
                        style={{ color: mainColor }}
                    >
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

export default Profile;
