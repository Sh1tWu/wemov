import React, { memo } from "react"
import { useHistory } from "react-router-dom"

import IMGBASEURL from "network/IMAGEURL"

import arrow from "assets/img/icon/arrow_right_gray.svg"

import {
    Container,
    LeftPart,
    RightPart,
    Image,
    InfoWrap,
    Info,
    Title,
    Date,
    Overview,
    OptionBar,
    Vote,
    Jump,
    Icon,
} from "../style/item.style"

const Item = (props) => {
    console.log(props.movieInfo.id)
    const history = useHistory()

    function toIntroduction() {
        history.push(`/introduction/${props.movieInfo.id}`)
    }

    console.log(props.movieInfo)
    return (
        <Container>
            <LeftPart onClick={toIntroduction}>
                <Image
                    src={`${IMGBASEURL}${props.movieInfo.backdrop_path}`}
                ></Image>
                <InfoWrap>
                    <Info>
                        <Title>{props.movieInfo.title}</Title>
                        <Date>{props.movieInfo.release_date}</Date>
                    </Info>
                </InfoWrap>
            </LeftPart>

            <RightPart>
                <Overview>{props.movieInfo.overview}</Overview>
                <OptionBar>
                    <Vote>评分 : {props.movieInfo.vote_average}</Vote>
                    <Jump onClick={toIntroduction}>
                        <div>更多信息</div>
                        <Icon src={arrow}></Icon>
                    </Jump>
                </OptionBar>
            </RightPart>
        </Container>
    )
}

export default memo(Item)
