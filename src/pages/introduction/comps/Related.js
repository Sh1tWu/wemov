import React, { useState, useEffect, memo } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { useErrorHandler } from "react-error-boundary"

// 网络请求
import getRelatedFilms from "network/relatedFilms"
import { getMovie } from "network/movie"

// redux数据状态库
import { clearMovieData } from "../store/actionCreators"

// 自定义图片组件
import CustomImg from "components/customImg/customImg"

// css-in-js样式
import {
    Container,
    Header,
    Queue,
    Item,
    ItemImgWrap,
    DescriptionWrap,
    Description,
    Title,
    Info,
    Country,
    Date,
    EmptyQueue,
} from "../style/related.style"

function Related(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleError = useErrorHandler()

    const { id } = props
    const [filmsList, setFilmsList] = useState([])
    const [country, setCountry] = useState("")

    useEffect(() => {
        // 获取相关影片
        getRelatedFilms(id)
            .then((res) => {
                setFilmsList(res.results.splice(0, 12))
            })
            .catch((err) => {
                handleError(err)
            })
        // 获取国家名字
        getMovie(id)
            .then((res) => {
                if (res.production_countries.length === 0) return
                setCountry(res.production_countries[0].name)
            })
            .catch((err) => {
                handleError(err)
            })
    }, [id])

    const toMovie = (movie_id) => {
        dispatch(clearMovieData())
        history.push(`/introduction/${movie_id}`)
    }

    // throw Error("target")

    return (
        <Container>
            <Header>相关影片</Header>
            <Queue>
                {filmsList?.length !== 0 ? (
                    filmsList.map((item) => {
                        return (
                            <Item
                                key={item.id}
                                onClick={() => {
                                    toMovie(item.id)
                                }}
                            >
                                <ItemImgWrap>
                                    <CustomImg
                                        src={item.backdrop_path}
                                        type="img"
                                        style={{
                                            width: "100%",
                                            height: "208px",
                                        }}
                                    />
                                </ItemImgWrap>
                                <DescriptionWrap>
                                    <Description>
                                        <Title>{item.title}</Title>
                                        <Info>
                                            <Country>{country}</Country>
                                            <Date>
                                                {item.release_date
                                                    ? item.release_date.split(
                                                          "-"
                                                      )[0]
                                                    : null}
                                            </Date>
                                        </Info>
                                    </Description>
                                </DescriptionWrap>
                            </Item>
                        )
                    })
                ) : (
                    <EmptyQueue>空空如也</EmptyQueue>
                )}
            </Queue>
        </Container>
    )
}

export default memo(Related)
