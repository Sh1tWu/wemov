import React, { useRef, memo } from "react"
import PropTypes from "prop-types"
import { Image } from "antd"

import IMAGEURL from "network/IMAGEURL"

import ErrorImg from "assets/img/icon/errorImg.svg"
import ErrorAvatarImg from "assets/img/icon/avatar.svg"

const CustomImg = memo((props) => {
    const imgRef = useRef()

    const handleImgUrl = () => {
        return `${IMAGEURL}${props.src}`
    }

    // 加载成功时的函数
    const handleOnLoad = () => {
        console.log("图片加载成功")
        console.log(`${IMAGEURL}${props.src}`)
        // imgRef.current.src =
    }

    // 加载失败的函数
    const handleOnError = () => {
        console.log("图片加载失败")
        if (props.type === "people") {
            imgRef.current.src = ErrorAvatarImg
        } else {
            imgRef.current.src = ErrorImg
        }
    }

    // 基本样式
    const baseNormalStyle = {
        width: "100%",
    }

    return (
        <>
            <Image
                src={handleImgUrl()}
                preview={false}
                fallback={props.type === "people" ? ErrorAvatarImg : ErrorImg}
                style={{ ...baseNormalStyle, ...props.style }}
            ></Image>
        </>
    )
})

CustomImg.defaultProps = {
    type: "",
    src: "",
    style: {},
}

CustomImg.propType = {
    src: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
}

export default CustomImg
