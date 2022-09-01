import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import getRelatedFilms from "network/relatedFilms"
import { getMovie } from "network/movie"

import CustomImg from "components/customImg/customImg"

import {
    Container,
    Header,
    Queue,
    Item,
    ItemImg,
    Description,
    Title,
    Info,
    Country,
    Date,
} from "../style/related.style"

function Related(props) {
    const history = useHistory()

    const { id } = props
    const [filmsList, setFilmsList] = useState([])
    const [country, setCountry] = useState("")

    useEffect(() => {
        // 获取相关影片
        getRelatedFilms(id).then((res) => {
            console.log(res.results)
            setFilmsList(res.results.splice(0, 12))
        })
        // 获取国家名字
        getMovie(id).then((res) => {
            setCountry(res.production_countries[0].name)
        })
    }, [id])

    const toMovie = (movie_id) => {
        history.push(`/introduction/${movie_id}`)
    }

    return (
        <Container>
            <Header>相关影片</Header>
            <Queue>
                {filmsList
                    ? filmsList.map((item) => {
                          return (
                              <Item
                                  key={item.id}
                                  onClick={() => {
                                      toMovie(item.id)
                                  }}
                              >
                                  <CustomImg
                                      src={item.backdrop_path}
                                      type="img"
                                      style={{ width: "100%", height: "208px" }}
                                  />
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
                              </Item>
                          )
                      })
                    : null}
            </Queue>
        </Container>
    )
}

export default Related
