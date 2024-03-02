import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SALMAL_API = process.env.REACT_APP_SALMAL_API;

export const sendDataToSpreadsheet = async (data) => {
    try {
        const response = await fetch(`${SALMAL_API}`, {
            method: "POST", // HTTP 요청 메서드 설정
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const jsonResponse = await response.json(); // 응답 본문을 JSON으로 파싱
        console.log("Success:", jsonResponse); // 성공 응답 로그 출력
    } catch (error) {
        console.error("Error:", error); // 오류 로그 출력
    }
};
