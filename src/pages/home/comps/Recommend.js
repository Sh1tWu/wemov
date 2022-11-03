import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"

// 样式
import styles from "../style/recommend.module.scss"

// img
import IMGBASEURL from "network/IMAGEURL"

function Recommend() {
    const { firstMovie } = useSelector(
        (state) => ({
            firstMovie: state.home.firstMovie,
        }),
        shallowEqual
    )

    const history = useHistory()
    const [movie, setMovie] = useState([])
    const [imgError, setImgError] = useState(false)

    useEffect(() => {
        setMovie(firstMovie[0])
    }, [firstMovie])

    // 路由跳转
    function toIntroduction(id) {
        history.push(`/introduction/${id}`)
    }

    // img onerror
    function resetImgUrl(e, imgSrc, maxErrorNum) {
        const timer = setTimeout(() => {
            if (maxErrorNum > 0) {
                console.log(maxErrorNum)
                maxErrorNum -= 1
                e.target.src = imgSrc
                resetImgUrl(e, imgSrc, maxErrorNum)
            } else {
                console.log("请求图片失败")
                clearTimeout(timer)
                setImgError(true)
                e.target.onerror = null
            }
        }, 2000)
    }

    return (
        <div
            className={styles.recommend}
            onClick={() => toIntroduction(movie.id)}
        >
            {/* 默认展示图片 */}
            {movie ? (
                <>
                    {imgError === false ? (
                        <img
                            src={`${IMGBASEURL}${movie.backdrop_path}`}
                            className={styles.defaultImg}
                            alt="电影海报"
                            onError={(e) => {
                                resetImgUrl(
                                    e,
                                    `${IMGBASEURL}${movie.backdrop_path}`,
                                    3
                                )
                            }}
                        />
                    ) : (
                        <div className={styles.imgErrorCover}></div>
                    )}

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
        </div>
    )
}

export default Recommend
