import React from "react";
import styles from "./shareIcon.module.css";
import { useDispatch } from "react-redux";
import { setShareButton } from "../../features/dataSlice";

const TwitterShareButton = () => {
    const dispatch = useDispatch();
    function click() {
        dispatch(setShareButton("twitter"));
    }
    return (
        <div onClick={click}>
            <a
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=https://felizmbti.netlify.app/"
                data-size="large"
            >
                <img
                    src="/img/result/circle_X.jpg"
                    alt="twitter_icon"
                    className={styles.twitter__icon}
                />
            </a>
        </div>
    );
};

export default TwitterShareButton;
