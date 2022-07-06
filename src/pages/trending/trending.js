import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import Item from "./comps/item"

import {
    Banner,
    BannerTitle,
    BannerImg,
    ItemWrap,
} from "./style/trending.style"

const Trending = (props) => {
    const { recommendList } = useSelector((state) => ({
        recommendList: state.getIn(["home", "recommendList"]),
    }))
    const history = useHistory()

    return (
        <>
            <Banner>
                <BannerImg />
            </Banner>
            <BannerTitle>今 日 份 电 影</BannerTitle>
            <ItemWrap>
                {recommendList.map((item) => {
                    return <Item movieInfo={item} key={item.id} />
                })}
            </ItemWrap>
        </>
    )
}

export default Trending
