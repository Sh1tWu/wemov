import React, { useRef, useEffect, useState } from "react"
import { useHistory, withRouter } from "react-router-dom"

// img
import logo from "assets/img/logo.svg"
import user from "assets/img/user.svg"
import menu from "assets/img/menu.svg"
import search from "assets/img/search.svg"
import loading from "assets/img/gif/loading.gif"
import clear from "assets/img/icon/clearText.svg"

// 样式
import "antd/lib/grid/style/css"
import styles from "./topbar.module.scss"

// 组件
import PopCover from "./comps/pocover/popcover"
import SearchBoard from "../searchBoard/SearchBoard"

// utils
import { debounce } from "utils/debounce"

// network
import { getSearchMovie, getSearchCast } from "network/search"

const TopBar = () => {
    const history = useHistory()

    const searchBoardRef = useRef()
    const inputRef = useRef()

    let [menuShowing, setMenuShowing] = useState(false)
    let [boardShow, setBoardShow] = useState(false)
    let [loadingShow, setLoadingShow] = useState(false)
    const [movieList, setMovieList] = useState({})
    const [castList, setCastList] = useState({})

    // 点击区域以外的区域关闭搜索板
    useEffect(() => {
        const closeSearchBoard = (e) => {
            if (!searchBoardRef.current.contains(e.target)) {
                setBoardShow(false)
            }
        }
        if (boardShow) {
            document.addEventListener("click", closeSearchBoard)
        }

        if (!boardShow) {
            document.removeEventListener("click", closeSearchBoard)
        }
    }, [searchBoardRef, boardShow])

    function showMenu() {
        setMenuShowing(!menuShowing)
    }

    function showSearchBoard() {
        setBoardShow(true)
    }

    // 返回首页
    function toHome() {
        history.push({
            pathname: "/",
        })
    }

    // 前往搜索页面
    function toSearch(event) {
        if (event.keyCode === 13 && event.target.value) {
            let query = event.target.value.toString().replace(/^\ /, "+")
            history.push({
                pathname: `/search/films`,
                search: `query=${query}&page=${1}`,
            })
            event.target.value = ""
        }
    }

    // 搜索内容
    const debounceSearch = debounce(async (e) => {
        if (e.target.value) {
            setLoadingShow(true)
            await Promise.allSettled([
                getSearchMovie(e.target.value)
                    .then((res) => {
                        setMovieList({
                            results: res.results.slice(0, 4),
                            total: res.total_results,
                        })
                    })
                    .catch((err) => {
                        throw Error(err)
                    }),
                ,
                getSearchCast(e.target.value)
                    .then((res) => {
                        setCastList({
                            results: res.results.slice(0, 3),
                            total: res.total_results,
                        })
                    })
                    .catch((err) => {
                        throw Error(err)
                    }),
            ])
                .then((res) => {
                    setLoadingShow(false)
                })
                .catch((err) => {
                    setLoadingShow(false)
                })
        }
    }, 1000)

    // 清除搜索框文本
    function clearText() {
        inputRef.current.value = ""
        setMovieList([])
        setCastList([])
    }

    return (
        <>
            {/* 正常版TopBar */}
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <div className={styles.logo} onClick={toHome}>
                        <div className={styles.logoName}>WeMov</div>
                        <div className={styles.logoImgWrapper}>
                            <img src={logo} className={styles.logoImg} alt="" />
                        </div>
                    </div>

                    {/* 搜索栏 */}
                    <div className={styles.searchBar} ref={searchBoardRef}>
                        <input
                            type="text"
                            className={styles.searchBox}
                            placeholder="search"
                            onKeyUp={toSearch}
                            onInput={debounceSearch}
                            onFocus={showSearchBoard}
                            ref={inputRef}
                        />

                        <img
                            src={search}
                            className={styles.searchIcon}
                            alt=""
                        ></img>

                        {loadingShow ? (
                            <img
                                src={loading}
                                className={styles.loadingIcon}
                                alt=""
                            ></img>
                        ) : inputRef.current?.value ? (
                            <img
                                src={clear}
                                onClick={clearText}
                                className={styles.loadingIcon}
                                alt=""
                            ></img>
                        ) : null}

                        {boardShow &&
                        Object.keys(castList).length !== 0 &&
                        Object.keys(movieList).length !== 0 ? (
                            <SearchBoard
                                castList={castList}
                                movieList={movieList}
                                setBoardShow={setBoardShow}
                                query={inputRef.current.value
                                    .toString()
                                    .replace(/^\ /, "+")}
                            />
                        ) : null}
                    </div>
                    {/* 
                    <div className={styles.info}>
                        <div className={styles.showing}>NOW SHOWING</div>

                        <div className={styles.notebook}>NOTEBOOK</div>

                        <img src={user} className={styles.userImg} alt="" />

                        <img
                            src={menu}
                            className={styles.menuIcon}
                            onClick={showMenu}
                            alt=""
                        />

                        <PopCover showPopCover={menuShowing} />
                    </div> */}
                </div>
            </div>

            {/* Small版TopBar */}
            {/* <div className={styles.container}>
                <div className={styles.topBarSmall}>
                    <img
                        src={menu}
                        className={styles.menuIconSmall}
                        onClick={showMenu}
                        alt=""
                    />

                    <div className={styles.logoSmall}>
                        <div className={styles.logoNameSmall}>WeMov</div>
                        <div className={styles.logoImgWrapperSmall}>
                            <img
                                src={logo}
                                className={styles.logoImgSmall}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className={styles.hotPointSmall}></div>
                </div>
            </div> */}
        </>
    )
}

export default withRouter(TopBar)
