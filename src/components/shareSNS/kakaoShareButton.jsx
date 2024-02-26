import React, { useEffect } from "react";
import styles from "./shareIcon.module.css";

const KakaoShareButton = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    useEffect(() => {
        KakaoShareButton();
    }, []);
    const KakaoShareButton = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao;
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                kakao.init(API_KEY);
            }
            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: "#kakao-link-btn",
                objectType: "feed",
                content: {
                    title: "애플 환생 테스트",
                    description: "내가 애플 제품으로 환생한다면?",
                    imageUrl: "https://i.ibb.co/vcPbf6d/first-screen.png",
                    link: {
                        mobileWebUrl: "https://salkka-malkka.vercel.app/",
                        webUrl: "https://salkka-malkka.vercel.app/",
                    },
                },
                buttons: [
                    {
                        title: "테스트 하기",
                        link: {
                            mobileWebUrl: "https://salkka-malkka.vercel.app/",
                            webUrl: "https://salkka-malkka.vercel.app/",
                        },
                    },
                ],
            });
        }
    };
    return (
        <div className="kakao-share-button">
            {/* Kakao share button */}
            <a href="/#" id="kakao-link-btn">
                <img
                    src="/img/result/circle_kakao.jpg"
                    alt="kakao-share-icon"
                    className={styles.kakao__icon}
                />
            </a>
        </div>
    );
};
export default KakaoShareButton;
