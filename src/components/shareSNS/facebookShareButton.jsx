import React from "react";
import styles from "./shareIcon.module.css";

const FacebookShareButton = () => {
    const copyToClipboard = () => {
        // 현재 페이지의 URL을 클립보드에 복사합니다.
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
                // 복사 성공 시 로그나 사용자에게 알림을 표시할 수 있습니다.
                console.log("URL copied to clipboard successfully!");
                alert("URL has been copied to clipboard!");
            })
            .catch((err) => {
                // 복사 실패 시 에러 처리를 할 수 있습니다.
                console.error("Failed to copy URL: ", err);
                alert("Failed to copy URL");
            });
    };
    return (
        <div onClick={copyToClipboard}>
            <img
                src="/img/clip.svg"
                className={styles.facebook__icon}
                alt="facebook_icon"
            />
        </div>
    );
};

export default FacebookShareButton;
