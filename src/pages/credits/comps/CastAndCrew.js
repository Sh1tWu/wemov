import React, { useState, useEffect, memo } from "react"
import { useHistory } from "react-router-dom"

import { getCasts } from "network/casts"

import IMGBASEURL from "network/IMAGEURL"

import CustomImg from "components/customImg/customImg"

// 工具函数
import resolveCastName from "utils/resolveCastName"

import {
    Container,
    Item,
    ItemImgWrap,
    Info,
    Name,
    Character,
} from "../style/castAndCrew.style"

function CastAndCrew(props) {
    const { id } = props
    const [cast, setCast] = useState([])
    const history = useHistory()

    useEffect(() => {
        getCasts(id).then((res) => {
            let list = res.cast.concat(res.crew)
            setCast(list)
        })
    }, [])

    function toCast(name, id) {
        let urlName = resolveCastName(name)
        history.push({ pathname: `/cast/${urlName}`, state: { id: id } })
    }

    return (
        <>
            <Container>
                {cast
                    ? cast.map((item) => {
                          return (
                              <Item
                                  key={item.credit_id}
                                  onClick={() => toCast(item.name, item.id)}
                              >
                                  <ItemImgWrap>
                                      <CustomImg
                                          src={`${IMGBASEURL}${item.profile_path}`}
                                          type="people"
                                          style={{
                                              width: "100%",
                                              height: "270px",
                                          }}
                                      />
                                  </ItemImgWrap>
                                  <Info>
                                      <Name>{item.name}</Name>
                                      <Character>
                                          {item.known_for_department}
                                      </Character>
                                  </Info>
                              </Item>
                          )
                      })
                    : null}
            </Container>
        </>
    )
}

export default memo(CastAndCrew)
