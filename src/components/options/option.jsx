import React, { createRef, useEffect, useState } from "react";
import styles from "./option.module.css";
import { useHistory } from "react-router-dom";
import Questions from "../../common/api/questionsApi";

const Options = () => {
    const [loading, setLoading] = useState(false);
    const [num, setNum] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = createRef();
    const TOTAL_SLIDES = Questions.length;
    const history = useHistory();
    const [mbtiCounts, setMbtiCounts] = useState({
        I: 0,
        E: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    });
    const [finalMbti, setFinalMbti] = useState("");

    const updateMbtiCountAndNavigate = (type) => {
        setMbtiCounts((prevCounts) => {
            const updatedCounts = {
                ...prevCounts,
                [type]: prevCounts[type] + 1,
            };

            if ((num + 1) % 3 === 0 || currentSlide === TOTAL_SLIDES) {
                const mbtiResult = calculateMbtiResult(updatedCounts);
                setFinalMbti(mbtiResult);
                if (currentSlide === TOTAL_SLIDES) {
                    setLoading(true);
                    setTimeout(() => {
                        history.push(`/result/${mbtiResult}`);
                    }, 3000);
                }
            }
            return updatedCounts;
        });
    };

    const calculateMbtiResult = (counts) => {
        const mbtiPairs = ["EI", "SN", "TF", "JP"];
        return mbtiPairs
            .map((pair) => {
                const [firstType, secondType] = pair.split("");
                return counts[firstType] >= counts[secondType]
                    ? firstType
                    : secondType;
            })
            .join("");
    };

    const nextSlide = (answerIndex) => {
        const answerType = Questions[num].answers[answerIndex].type;
        updateMbtiCountAndNavigate(answerType);

        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        if (slideRef.current) {
            slideRef.current.style.transform += "translateX(-100vw)";
        }
    };

    useEffect(() => {
        if (!loading && currentSlide > TOTAL_SLIDES) {
            setLoading(true);
            setTimeout(() => {
                history.push(`/result/${finalMbti}`);
            }, 3000);
        }
    }, [currentSlide, finalMbti, history, loading]);

    return (
        <>
            <section className={styles.container}>
                {!loading && (
                    <div className={styles.slider} ref={slideRef}>
                        {Questions.map((item, index) => (
                            <div className={styles.content} key={item.id}>
                                {/* Question and Answer Rendering */}
                                <div className={styles.top}>
                                    <div className={styles.mbti__counter}>
                                        <span
                                            className={
                                                styles.mbti__progress__color
                                            }
                                        >
                                            {currentSlide}
                                        </span>
                                        <span
                                            className={styles.mbti__end__color}
                                        >
                                            /{TOTAL_SLIDES}
                                        </span>
                                    </div>
                                    <h1 className={styles.mbti__question}>
                                        {item.question}
                                    </h1>
                                </div>
                                <article className={styles.mbti__btn__box}>
                                    {item.answers.map((answer, answerIndex) => (
                                        <button
                                            key={answer.type}
                                            className={styles.mbti__button}
                                            onClick={() =>
                                                nextSlide(answerIndex)
                                            }
                                        >
                                            {answer.content}
                                        </button>
                                    ))}
                                </article>
                            </div>
                        ))}
                    </div>
                )}
                {loading && (
                    <div className={styles.loading__container}>
                        {/* Loading Animation */}
                    </div>
                )}
            </section>
        </>
    );
};

export default Options;
