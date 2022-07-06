import React, { useState, useEffect } from "react"

// style
import style from "../style/display.module.scss"

// Icon
import Horn from "@/assets/img/icon/horn.svg"
import Clock from "@/assets/img/icon/clock.svg"

// constants
import IMGBASEURL from "@/network/IMAGEURL"

import { getMovie } from "@/network/movie"

export default function Display(props) {
    const { id } = props
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getMovie(id).then((res) => {
            setMovie(res)
        })
    }, [])

    return (
        <div className={style.display}>
            {/* 图片 */}
            <img
                className={style.displayImg}
                src={`${IMGBASEURL}${movie.backdrop_path}`}
                alt="电影海报"
            />
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
                    <div class={style.rightPart}>
                        摘要
                        <div className={style.overview}>{movie.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
