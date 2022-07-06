import React, { useState, useEffect } from "react"

import { useHistory } from "react-router-dom"

import style from "../style/casts.module.scss"

import { getCasts } from "@/network/casts"

import IMGBASEURL from "@/network/IMAGEURL"

import useWidth from "@/hooks/useWidth"

import CustomImg from "@/components/customImg/customImg"

// 工具函数
import resolveCastName from "@/utils/resolveCastName"

export default function Casts(props) {
    const { id } = props
    const history = useHistory()
    const [casts, setCasts] = useState([])
    const [mainCasts, setMainCasts] = useState([])
    const [secondaryCasts, setSecondaryCasts] = useState([])
    const windowWidth = useWidth()

    useEffect(() => {
        getCasts(id).then((res) => {
            setCasts(res.cast)
        })
    }, [])

    useEffect(() => {
        setMainCasts(casts.slice(0, 8))
        setSecondaryCasts(casts.slice(0, 6))
    }, [casts])

    function toCredits(id) {
        history.push(`/introduction/${id}/credits`)
    }

    function toCast(name, id) {
        console.log(name, id)
        let urlName = resolveCastName(name)
        history.push({ pathname: `/cast/${urlName}`, state: { id: id } })
    }

    return (
        <div className={style.casts}>
            {/* 头部 */}
            <div className={style.header}>
                <div className={style.title}>CAST & CREW</div>
                <div className={style.showAll} onClick={() => toCredits(id)}>
                    Show all ({casts.length})
                </div>
            </div>

            {/* 演员列表 */}
            <div className={style.list}>
                {windowWidth >= 1530 || windowWidth <= 1149
                    ? mainCasts
                        ? mainCasts.map((item) => {
                              return (
                                  <div
                                      className={style.item}
                                      key={item.id}
                                      onClick={() => toCast(item.name, item.id)}
                                  >
                                      <div className={style.itemImgWrap}>
                                          <CustomImg
                                              src={`${IMGBASEURL}${item.profile_path}`}
                                              type="people"
                                              style={{
                                                  width: "100%",
                                                  height: "270px",
                                              }}
                                          ></CustomImg>
                                      </div>
                                      <div className={style.info}>
                                          <div className={style.name}>
                                              {item.name}
                                          </div>
                                          <div className={style.character}>
                                              {item.known_for_department}
                                          </div>
                                      </div>
                                  </div>
                              )
                          })
                        : null
                    : secondaryCasts
                    ? secondaryCasts.map((item) => {
                          return (
                              <div className={style.item} key={item.id}>
                                  <div className={style.itemImgWrap}>
                                      <img
                                          src={`${IMGBASEURL}${item.profile_path}`}
                                          className={style.itemImg}
                                          alt="演员图片"
                                      />
                                  </div>
                                  <div className={style.info}>
                                      <div className={style.name}>
                                          {item.name}
                                      </div>
                                      <div className={style.character}>
                                          {item.known_for_department}
                                      </div>
                                  </div>
                              </div>
                          )
                      })
                    : null}
            </div>
        </div>
    )
}
