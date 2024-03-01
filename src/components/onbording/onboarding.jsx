import React, { useState } from "react";
import styles from "./onboarding.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFinalPage, setAge, setGender } from "../../features/dataSlice";

export const OnBoarding = () => {
    const [selected, setSelected] = React.useState([]);
    const history = useHistory();
    const dispatch = useDispatch();
    dispatch(setFinalPage("/onboarding"));

    const options = [
        "1980년생",
        "1981년생",
        "1982년생",
        "1983년생",
        "1984년생",
        "1985년생",
        "1986년생",
        "1987년생",
        "1988년생",
        "1989년생",

        "1990년생",
        "1991년생",
        "1992년생",
        "1993년생",
        "1994년생",
        "1995년생",
        "1996년생",
        "1997년생",
        "1998년생",
        "1999년생",
        "2000년생",
        "2001년생",
        "2002년생",
        "2003년생",
        "2004년생",
        "2005년생",
        "2006년생",
        "2007년생",
        "2008년생",
        "2009년생",
        "2010년생",
        "2011년생",
        "2012년생",
        "2013년생",
        "2014년생",
    ];
    const defaultOption = options[20];

    return (
        <div className={styles.wrap__all}>
            <style>
                {`
          .custom-dropdown .Dropdown-control {
            border-color: #CE9CFF; /* 테두리 색상 변경 */
            width: 296px; /* 너비 설정 */
            border-radius:12px;
            box-sizing: border-box; /* 너비 계산 방식을 border-box로 설정

          }
        `}
            </style>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <img
                        src="img/onboard/img.svg"
                        alt="img"
                        className={styles.main__img}
                    />
                    <h2 className={styles.header}>
                        당신은 애플 제품으로 환생하게 되었습니다
                        <br />
                        환생 전, 애플 시티를 지나며 다양한 응답을 하게 됩니다.
                        <br />이 응답을 통해 당신의 성격에
                        <br />
                        가장 잘 맞는 애플 제품으로 환생하게 됩니다.
                    </h2>
                    <h1
                        className={styles.result__city}
                        style={{ padding: "71px 0 0 0" }}
                    >
                        환생 전 나이
                    </h1>
                    <Dropdown
                        options={options}
                        onChange={(option) => {
                            dispatch(setAge(option.value));
                        }}
                        value={defaultOption}
                        placeholder="Select an option"
                        className="custom-dropdown"
                    />
                    <h1
                        className={styles.result__city}
                        style={{ padding: "48px 0 0 0" }}
                    >
                        환생 전 성별
                    </h1>

                    <div className={styles.genter__button}>
                        {/* 남자 버튼 */}
                        <button
                            onClick={() => {
                                dispatch(setGender("남성"));
                                history.push("/tripMBTI"); // 버튼 클릭 시 /result/tripMBTI로 라우팅
                            }}
                            style={{
                                width: "170px",
                                padding: "0,0,0,10",
                                height: "80px",
                                display: "flex", // Flexbox 모델 사용
                                justifyContent: "center", // 가로축 중앙 정렬
                                alignItems: "center", // 세로축 중앙 정렬
                                fontSize: "16px", // 필요에 따라 폰트 사이즈 조정
                                backgroundColor: "#CE9CFF",
                                color: "white",
                                borderRadius: "12px",
                            }}
                        >
                            남성
                        </button>

                        {/* 여자 버튼 */}
                        <button
                            onClick={() => {
                                dispatch(setGender("여성"));
                                history.push("/tripMBTI");
                            }}
                            style={{
                                width: "170px",
                                height: "80px",
                                display: "flex", // Flexbox 모델 사용
                                justifyContent: "center", // 가로축 중앙 정렬
                                alignItems: "center", // 세로축 중앙 정렬
                                fontSize: "16px", // 필요에 따라 폰트 사이즈 조정
                                backgroundColor: "#CE9CFF",
                                color: "white",
                                borderRadius: "12px",
                            }}
                        >
                            여자
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnBoarding;
