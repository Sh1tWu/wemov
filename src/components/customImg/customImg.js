import React, { useState, memo } from "react"
import PropTypes from "prop-types"
import { Image } from "antd"

import IMAGEURL from "network/IMAGEURL"

const CustomImg = memo((props) => {
    const [errorLoaded, setErrorLoaded] = useState(false)

    // 加载失败的函数
    const handleOnError = () => {
        setErrorLoaded(true)
    }

    return (
        <>
            {props?.src !== null && errorLoaded === false ? (
                <Image
                    src={`${IMAGEURL}${props.src}`}
                    preview={false}
                    // fallback={props.type === "people" ? ErrorAvatarImg : null}
                    onError={handleOnError}
                    style={{
                        width: "100%",
                        ...props.style,
                    }}
                ></Image>
            ) : (
                <div
                    style={{
                        ...props.style,
                        width: "100%",
                        backgroundColor: "#999999",
                    }}
                ></div>
            )}
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
    type: PropTypes.oneOf(["people", "movie", ""]),
    style: PropTypes.object,
}

export default CustomImg
