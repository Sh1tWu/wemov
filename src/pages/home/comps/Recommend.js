import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch, shallowEqual } from "react-redux"

// 样式
import styles from "../style/recommend.module.scss"

import IMGBASEURL from "network/IMAGEURL"

export default function Recommend() {
    const { firstMovie } = useSelector(
        (state) => ({
            firstMovie: state.getIn(["home", "firstMovie"]),
        }),
        shallowEqual
    )

    const [movie, setMovie] = useState([])
    useEffect(() => {
        console.log(firstMovie)
        setMovie(firstMovie[0])
    }, [firstMovie])
    // 路由跳转
    const history = useHistory()
    function toIntroduction(id) {
        history.push(`/introduction/${id}`)
    }

    return (
        <div
            className={styles.recommend}
            onClick={() => toIntroduction(movie.id)}
        >
            {/* 默认展示图片 */}
            {movie ? (
                <>
                    <img
                        src={`${IMGBASEURL}/${movie.backdrop_path}`}
                        className={styles.defaultImg}
                        alt=""
                    />
                    {/* 影片文字描述 */}
                    <div className={styles.description}>
                        <div className={styles.descriptionSub}>
                            <div className={styles.name}>{movie.title}</div>
                            <div className={styles.date}>
                                {movie.release_date}
                            </div>
                            <div className={styles.information}>
                                {movie.overview}
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {/* 播放按钮 */}
            {/* <div className={styles.play}>
                <div className={styles.playIconWrap}>
                    <img src={Play} className={styles.playIcon} alt="" />
                </div>
            </div> */}
        </div>
    )
}
