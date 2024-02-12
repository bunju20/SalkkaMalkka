import styles from "./countries.module.css";
import { Link } from "react-router-dom";
import Countries from "../../common/api/countriesApi/../countriesApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import KakaoBtn from "../shareSNS/kakaoShareButton";
import FacebookBtn from "../shareSNS/facebookShareButton";
import TwitterBtn from "../shareSNS/twitterShareButton";

const Profile = ({ match }) => {
    const url = window.location.href;
    const { countryName } = match.params;
    const nation = Countries[countryName];

    if (!nation) {
        return <div>존재하지 않는 결과입니다.</div>;
    }
    const copyAlert = () => {
        alert("링크 복사완료!");
    };
    return (
        <>
            <div className={styles.wrapper} key={nation.id}>
                <div className={styles.container}>
                    <div className={styles.header}></div>
                    <img
                        src={nation.img}
                        alt="img"
                        className={styles.main__img}
                    />
                    <div className={styles.result__type}>
                        <h1 className={styles.result__city}>
                            {nation.subhead}
                        </h1>
                        <h1 className={styles.result__city}>
                            {nation.subject}
                        </h1>
                        <br />
                    </div>
                    <div className={styles.tagsContainer}>
                        <div className={styles.tag}>
                            <span>{nation.mbtitag}</span>
                        </div>
                        <div className={styles.tag} style={{ width: "60%" }}>
                            <span>{nation.hashtag}</span>
                        </div>
                    </div>

                    <div className={styles.result__list__box}>
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
                    </div>
                    <div className={styles.result__advice__box}>
                        <div className={styles.result__advice}>
                            <h4>환상의 조합</h4>
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
                    <h1 className={styles.result__city}>테스트결과 공유하기</h1>
                    <div className={styles.shareBox}>
                        <KakaoBtn />
                        <FacebookBtn />
                        <TwitterBtn />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
