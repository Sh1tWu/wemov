import React, { useState } from "react"

// img
import logo from "../../assets/img/logo.svg"
import user from "../../assets/img/user.svg"
import menu from "../../assets/img/menu.svg"
import search from "../../assets/img/search.svg"

// 样式
import "antd/lib/grid/style/css"

import styles from "./topbar.module.scss"

// 组件
import PopCover from "./comps/pocover/popcover"

export default function TopBar() {
    let [menuShowing, setMenuShowing] = useState(false)
    let [messageNotification, setMessageNotification] = useState()

    function showMenu() {
        setMenuShowing(!menuShowing)
    }

    return (
        <>
            {/* 正常版TopBar */}
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <div className={styles.logo}>
                        <div className={styles.logoName}>WeMov</div>
                        <div className={styles.logoImgWrapper}>
                            <img src={logo} className={styles.logoImg} alt="" />
                        </div>
                    </div>

                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            className={styles.searchBox}
                            placeholder="search"
                        />
                        <img
                            src={search}
                            className={styles.searchIcon}
                            alt=""
                        ></img>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.showing}>NOW SHOWING</div>

                        <div className={styles.notebook}>NOTEBOOK</div>

                        <img src={user} className={styles.userImg} alt="" />

                        {messageNotification ? (
                            <div className={styles.hotPointActive}></div>
                        ) : null}

                        <img
                            src={menu}
                            className={styles.menuIcon}
                            onClick={showMenu}
                            alt=""
                        />

                        {/* 弹出气泡框 */}
                        <PopCover showPopCover={menuShowing} />
                    </div>
                </div>
            </div>

            {/* Small版TopBar */}
            <div className={styles.container}>
                <div className={styles.topBarSmall}>
                    {/* 菜单 */}
                    <img
                        src={menu}
                        className={styles.menuIconSmall}
                        onClick={showMenu}
                        alt=""
                    />
                    {/* logo */}
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
                    {/* 通知 */}
                    <div className={styles.hotPointSmall}></div>
                </div>
            </div>
        </>
    )
}
