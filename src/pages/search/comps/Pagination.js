import React, { useState, useEffect, memo, useMemo } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import qs from "querystring"

import * as styled from "../style/pagination.style"
import ArrowLeftBlack from "assets/img/icon/arrow_left_black.svg"
import ArrowRightBlack from "assets/img/icon/arrow_right_black.svg"

import {
    getSearchCastAction,
    getSearchMovieAction,
} from "../store/actionCreator"

const Pagination = memo(({ type }) => {
    const { totalPage } = useSelector((state) => {
        if (type === "films")
            return { totalPage: state.search.movie.total_pages }
        return { totalPage: state.search.cast.total_pages }
    }, shallowEqual)

    const dispatch = useDispatch()
    const history = useHistory()
    const { search } = useLocation()
    const { query, page } = qs.parse(search.replace(/^\?/, ""))
    const [currentPage, setCurrentPage] = useState(parseInt(page))
    const [pageQueue, setPageQueue] = useState([])

    const selectedStyle = useMemo(() => {
        return { backgroundColor: "white" }
    }, [])

    // 路由变化回顶
    useEffect(() => {
        history.listen((location, action) => {
            if (
                document.body.scrollTop ||
                document.documentElement.scrollTop > 0
            ) {
                window.scrollTo(0, 0)
            }
        })
    }, [history])

    // 搜索词改变时，页数归1
    // useEffect(() => {
    //     setCurrentPage(1)
    // }, [query])

    // 初始化页数队列
    useEffect(() => {
        let resultQueue = []
        if (currentPage === 1 && totalPage <= 7) {
            for (let i = 2; i < totalPage; i++) {
                resultQueue.push(i)
            }
            setPageQueue(resultQueue)
        } else if (currentPage === 1 && totalPage > 7) {
            for (let i = 2; i <= 5; i++) {
                resultQueue.push(i)
            }
            setPageQueue(resultQueue)
        }

        if (totalPage > 7) {
            if (currentPage < 4) {
                if (pageQueue.length > 4) {
                    // slice不会改变原数组，splice才会 !!!
                    setPageQueue((prevState) => [2, 3, 4, 5])
                }
            }
            // 加长队列(current = 4)
            else if (currentPage === 4) {
                setPageQueue((prevState) => [2, 3, 4, 5, 6])
            }
            // 启用左边的省略号 (currentPage = 5),并且维持长度为5的队列，并进行后续更新
            // 当(current = totalPage - 3),关闭右边的省略号
            else if (5 <= currentPage && currentPage <= totalPage - 3) {
                // console.log
                const queue = [
                    currentPage - 2,
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    currentPage + 2,
                ]
                setPageQueue((prevState) => queue)
            }
            // 减短队列 (current = totalPage - 2)
            else if (currentPage >= totalPage - 2) {
                // console.log("当前页数小于totalPage")
                setPageQueue((prevState) => [
                    totalPage - 4,
                    totalPage - 3,
                    totalPage - 2,
                    totalPage - 1,
                ])
                console.log(pageQueue)
            }
        }
    }, [currentPage, totalPage])

    // 换页发出的网络请求
    useEffect(() => {
        if (type === "films") {
            dispatch(getSearchMovieAction(query, currentPage))
        } else {
            dispatch(getSearchCastAction(query, currentPage))
        }
    }, [currentPage])

    // 上一页
    const prevPage = () => {
        if (currentPage === 1) return
        setCurrentPage((prevState) => prevState - 1)
        if (type === "films") {
            dispatch(getSearchCastAction(query, currentPage))
            history.push({
                pathname: "/search/films",
                search: `query=${query}&page=${currentPage}`,
            })
        } else {
            dispatch(getSearchMovieAction(query, currentPage))
            history.push({
                pathname: "/search/cast",
                search: `query=${query}&page=${currentPage}`,
            })
        }
    }

    // 下一页
    const nextPage = () => {
        if (currentPage === totalPage) return

        setCurrentPage((prevState) => prevState + 1)
        if (type === "films") {
            history.push({
                pathname: "/search/films",
                search: `query=${query}&page=${currentPage}`,
            })
        } else {
            history.push({
                pathname: "/search/cast",
                search: `query=${query}&page=${currentPage}`,
            })
        }
    }

    // 换页
    const beCurrentPage = (item) => {
        setCurrentPage(item)
        if (totalPage > 7) {
            if (currentPage < 4) {
                if (pageQueue.length > 4) {
                    // slice不会改变原数组，splice才会 !!!
                    setPageQueue((prevState) => [2, 3, 4, 5])
                }
            }
            // 加长队列(current = 4)
            else if (currentPage === 4) {
                setPageQueue((prevState) => [2, 3, 4, 5, 6])
            }
            // 启用左边的省略号 (currentPage = 5),并且维持长度为5的队列，并进行后续更新
            // 当(current = totalPage - 3),关闭右边的省略号
            else if (5 <= currentPage && currentPage <= totalPage - 3) {
                // console.log
                const queue = [
                    currentPage - 2,
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    currentPage + 2,
                ]
                setPageQueue((prevState) => queue)
            }
            // 减短队列 (current = totalPage - 2)
            else if (currentPage >= totalPage - 2) {
                // console.log("当前页数小于totalPage")
                setPageQueue((prevState) => [
                    totalPage - 4,
                    totalPage - 3,
                    totalPage - 2,
                    totalPage - 1,
                ])
                // console.log(pageQueue)
            }
        }
        if (type === "films") {
            history.push({
                pathname: "/search/films",
                search: `query=${query}&page=${item}`,
            })
        } else {
            history.push({
                pathname: "/search/cast",
                search: `query=${query}&page=${item}`,
            })
        }
    }

    return (
        <>
            <styled.Component>
                {totalPage ? (
                    <styled.Container>
                        {/* 左箭头 */}
                        <styled.ArrowImgWrap onClick={prevPage}>
                            <styled.ArrowImg
                                src={ArrowLeftBlack}
                            ></styled.ArrowImg>
                        </styled.ArrowImgWrap>
                        {/* 第一页 */}
                        <styled.Item
                            onClick={() => {
                                beCurrentPage(1)
                            }}
                            style={currentPage === 1 ? selectedStyle : null}
                        >
                            1
                        </styled.Item>
                        {/* 省略号 */}
                        {currentPage >= 5 ? (
                            <styled.Omitted>---</styled.Omitted>
                        ) : null}
                        {pageQueue.map((item) => {
                            return (
                                <styled.Item
                                    key={item}
                                    onClick={() => {
                                        beCurrentPage(item)
                                    }}
                                    style={
                                        currentPage === item
                                            ? selectedStyle
                                            : null
                                    }
                                >
                                    {item}
                                </styled.Item>
                            )
                        })}
                        {/* 省略号 */}
                        {totalPage >= 8 ? (
                            currentPage >= totalPage - 3 ? null : (
                                <styled.Omitted>---</styled.Omitted>
                            )
                        ) : null}
                        {/* 最后一页 */}
                        {totalPage !== 1 ? (
                            <styled.Item
                                onClick={() => {
                                    beCurrentPage(totalPage)
                                }}
                                style={
                                    currentPage === totalPage
                                        ? selectedStyle
                                        : null
                                }
                            >
                                {totalPage}
                            </styled.Item>
                        ) : null}

                        {/* 右箭头 */}
                        <styled.ArrowImgWrap onClick={nextPage}>
                            <styled.ArrowImg
                                src={ArrowRightBlack}
                            ></styled.ArrowImg>
                        </styled.ArrowImgWrap>
                    </styled.Container>
                ) : null}
            </styled.Component>
        </>
    )
})

export default Pagination
