import React from "react"
import { CSSTransition } from "react-transition-group"

import { PopCoverCmp } from "./style/popcover.style"

export default function PopCover(props) {
    const PopCoverClassNames = `popcover`
    const { showPopCover } = props
    const PopCoverList = [
        "Browse",
        "Invite Friends",
        "About",
        "Settings",
        "Help",
        "Log Out",
    ]

    return (
        <CSSTransition
            in={showPopCover}
            classNames={PopCoverClassNames}
            timeout={300}
            unmountOnExit={true}
        >
            <PopCoverCmp>
                <div className="wrap">
                    {PopCoverList.map((item) => {
                        return <div key={item}>{item}</div>
                    })}
                </div>
            </PopCoverCmp>
        </CSSTransition>
    )
}
