import React, { useState } from "react"
import { useSelector, shallowEqual } from "react-redux"

// style
import style from "../style/display.module.scss"

// Icon
import Horn from "assets/img/icon/horn.svg"
import Clock from "assets/img/icon/clock.svg"

// constants
import IMGBASEURL from "network/IMAGEURL"

function Display() {
    const { movie } = useSelector(
        (state) => ({
            movie: state.introduction.movie,
        }),
        shallowEqual
    )

    const [imgError, setImgError] = useState(false)

    function resetImgUrl(e, imgSrc, maxErrorNum) {
        // const timer = setTimeout(() => {
        //     if (maxErrorNum > 0) {
        //         console.log(maxErrorNum)
        //         maxErrorNum -= 1
        //         e.target.src = imgSrc
        //         resetImgUrl(e, imgSrc, maxErrorNum)
        //     } else {
        console.log("请求图片失败")
        // clearTimeout(timer)
        setImgError(true)
        e.target.onerror = null
        //     }
        // }, 2000)
    }

    return (
        <div className={style.display}>
            {/* 图片 */}
            {movie.toString !== `{}` &&
            movie.backdrop_path &&
            imgError === false ? (
                <div className={style.displayImgWrap}>
                    <img
                        className={style.displayImg}
                        src={`${IMGBASEURL}${movie.backdrop_path}`}
                        alt="电影海报"
                        onError={(e) => {
                            resetImgUrl(
                                e,
                                `${IMGBASEURL}${movie.backdrop_path}`,
                                3
                            )
                        }}
                    />
                </div>
            ) : (
                <div className={style.imgErrorCover}></div>
            )}

            {/* 文字描述 */}
            <div className={style.descriptionWrap}>
                <div className={style.description}>
                    {/* 详情 */}
                    <div className={style.leftPart}>
                        <div className={style.info}>
                            <div className={style.name}>{movie.title}</div>
                            <div className={style.date}>
                                <span>上映日期 : {movie.release_date}</span>
                            </div>
                            <div className={style.genres}>
                                {movie.genres
                                    ? movie.genres.map((item) => {
                                          return (
                                              <div
                                                  className={style.genresItem}
                                                  key={item.id}
                                              >
                                                  {item.name}
                                              </div>
                                          )
                                      })
                                    : null}
                            </div>
                            <div className={style.message}>
                                <div className={style.runtime}>
                                    <div className={style.runtimeImg}>
                                        <img
                                            src={Clock}
                                            className={style.runtimeIcon}
                                        />
                                    </div>
                                    <div className={style.runtimeText}>
                                        {movie.runtime}
                                    </div>
                                </div>
                                <div className={style.spokenLanguage}>
                                    <div className={style.spokenLanguageImg}>
                                        <img
                                            src={Horn}
                                            className={style.spokenLanguageIcon}
                                            alt=""
                                        />
                                    </div>
                                    {movie.spoken_languages
                                        ? movie.spoken_languages.map(
                                              (item, index) => {
                                                  return (
                                                      <div
                                                          key={index}
                                                          className={
                                                              style.languageItem
                                                          }
                                                      >
                                                          {item.english_name}
                                                      </div>
                                                  )
                                              }
                                          )
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 介绍 */}
                    <div className={style.rightPart}>
                        摘要
                        <div className={style.overview}>{movie.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display
