import React, { memo } from "react"

import { useHistory } from "react-router-dom"

import {
    Container,
    Header,
    Apartment,
    Size,
    Wrap,
    Item,
    ItemImgWrap,
    // ItemImg,
    DescriptionWrap,
    Description,
    Info,
    Title,
    Character,
    Date,
} from "../style/List.style"

import CustomImg from "components/customImg/customImg"

const List = memo((props) => {
    const history = useHistory()

    const { list } = props

    const toMovie = (movie_id) => {
        history.push(`/introduction/${movie_id}`)
    }

    console.log(list)
    return (
        <>
            <Container>
                <Header>
                    <Apartment>{props.title}</Apartment>
                    <Size>Show all({props.length})</Size>
                </Header>
                <Wrap>
                    {list
                        ? list.map((item) => {
                              return (
                                  <Item
                                      key={item.id}
                                      onClick={() => {
                                          toMovie(item.id)
                                      }}
                                  >
                                      {/* 影片图片 */}
                                      <ItemImgWrap>
                                          <CustomImg
                                              src={`${item.backdrop_path}`}
                                              style={{
                                                  width: "100%",
                                                  height: "208px",
                                                  margin: "0 auto",
                                              }}
                                          />
                                      </ItemImgWrap>
                                      {/* 影片信息 */}
                                      <Description>
                                          <Title>{item.title}</Title>
                                          <Info>
                                              <Character>
                                                  {item.character
                                                      ? item.character
                                                      : item.job}
                                              </Character>
                                              <Date>{item.release_date}</Date>
                                          </Info>
                                      </Description>
                                  </Item>
                              )
                          })
                        : null}
                </Wrap>
            </Container>
        </>
    )
})

export default List
