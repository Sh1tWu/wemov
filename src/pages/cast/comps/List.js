import React, { memo, useState } from "react"

import {
    Container,
    Header,
    Apartment,
    Size,
    Wrap,
    Item,
    ItemImgWrap,
    ItemImg,
    DescriptionWrap,
    Description,
    Info,
    Title,
    Character,
    Date,
} from "../style/List.style"

import IMGBASEURL from "@/network/IMAGEURL"

import CustomImg from "@/components/customImg/customImg"

const List = memo((props) => {
    const { list } = props
    // console.log(list)

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
                                  <Item>
                                      <ItemImgWrap>
                                          <CustomImg
                                              src={`${IMGBASEURL}${item.backdrop_path}`}
                                              errorStyle={{
                                                  width: "365px",
                                                  height: "208px",
                                              }}
                                          />
                                      </ItemImgWrap>
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
