import React, { useState, memo } from "react"
import PropTypes from "prop-types"

import ErrorImg from "@/assets/img/icon/errorImg.svg"
import LoadImg from "@/assets/img/icon/loadingImg.svg"
import ErrorAvatarImg from "@/assets/img/icon/avatar.svg"

const CustomImg = memo((props) => {
    const { type } = props
    const [errorState, setErrorState] = useState(false)
    const [src, setSrc] = useState(LoadImg)
    const [isFlag, setIsFlag] = useState(false)

    const handleOnLoad = () => {
        if (isFlag) return

        const imgDom = new Image()
        imgDom.src = props.src

        imgDom.onload = function () {
            setIsFlag(true)
            setSrc(props.src)
        }

        imgDom.onerror = function () {
            setIsFlag(true)
            setErrorState(true)
            if (type === "people") {
                setSrc(ErrorAvatarImg)
            } else {
                setSrc(ErrorImg)
            }
        }
    }

    const baseErrorStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    }
    const baseNormalStyle = {
        width: "100%",
    }

    return (
        <>
            {errorState === true ? (
                <div style={{ ...baseErrorStyle, ...props.errorStyle }}></div>
            ) : (
                <img
                    src={src}
                    onLoad={handleOnLoad}
                    style={{ ...baseNormalStyle, ...props.normalStyle }}
                ></img>
            )}
        </>
    )
})

CustomImg.defaultProps = {
    type: "img",
    style: {},
}

CustomImg.propType = {
    type: PropTypes.string,
    style: PropTypes.object,
}

export default CustomImg
