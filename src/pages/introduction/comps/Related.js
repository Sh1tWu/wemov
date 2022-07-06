import React, { useState, useEffect } from "react"

import getRelatedFilms from "@/network/relatedFilms"
import { getMovie } from "@/network/movie"

import CustomImg from "@/components/customImg/customImg"

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

import IMGBASEURL from "@/network/IMAGEURL"

function Related(props) {
    const { id } = props
    const [filmsList, setFilmsList] = useState([])
    const [country, setCountry] = useState("")

    useEffect(() => {
        getRelatedFilms(id).then((res) => {
            // console.log(res.results)
            setFilmsList(res.results.splice(0, 12))
        })
        getMovie(id).then((res) => {
            // console.log(res)
            setCountry(res.production_countries[0].name)
        })
    }, [])
    // console.log(filmsList)

    return (
        <Container>
            <Header>相关影片</Header>
            <Queue>
                {filmsList
                    ? filmsList.map((item) => {
                          return (
                              <Item key={item.id}>
                                  <CustomImg
                                      src={`${IMGBASEURL}/${item.backdrop_path}`}
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
