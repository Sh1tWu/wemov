import React, { useEffect } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { useHistory } from "react-router-dom"

// 样式
import styles from "../style/carouselQueue.module.scss"

// redux/action
import { getRecommendListAction } from "../store/actionCreator"

// 常量
import IMGBASEURL from "network/IMAGEURL"

export default function CarouselQueue() {
    const history = useHistory()
    // 推荐列表请求和redux数据合并
    const { recommendList } = useSelector(
        (state) => ({
            recommendList: state.getIn(["home", "recommendList"]),
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecommendListAction())
    }, [dispatch])

    function toTrending() {
        history.push("/trending")
    }

    function toIntroduction(id) {
        history.push(`/introduction/${id}`)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title} onClick={toTrending}>
                    电影推荐
                    <span className={styles.all}>(查看全部)</span>
                </div>
                {/* 轮播队列 */}
                <div className={styles.carouselQueue}>
                    {/* 轮播图 */}
                    <div className={styles.carouselQueueItems}>
                        {/* 图片展示区 */}
                        {recommendList
                            ? recommendList.map((item) => {
                                  return (
                                      <div
                                          className={styles.carouselQueueItem}
                                          key={item.id}
                                          onClick={() =>
                                              toIntroduction(item.id)
                                          }
                                      >
                                          {/* 图片展示区 */}
                                          <img
                                              src={`${IMGBASEURL}${item.poster_path}`}
                                              className={
                                                  styles.carouselQueueImg
                                              }
                                              alt="推荐"
                                          />
                                          {/* 文字描述 */}
                                          <div
                                              className={styles.descriptionWrap}
                                          >
                                              <div
                                                  className={styles.description}
                                              >
                                                  <div className={styles.name}>
                                                      {item.title}
                                                  </div>
                                                  <div className={styles.time}>
                                                      {item.release_date}
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                </div>
            </div>
        </>
    )
}
