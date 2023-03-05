import React from "react"
import { useHistory } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"

import * as styled from "../style/searchCast.style"

import CustomImg from "components/customImg/customImg"
import Pagination from "./Pagination"

import resolveCastName from "utils/resolveCastName"

function SearchCast() {
    const { cast } = useSelector(
        (state) => ({
            cast: state.search.cast,
        }),
        shallowEqual
    )

    // console.log(`SearchCar render~~`)

    const history = useHistory()

    function toCast(item) {
        console.log(item)
        history.push({
            pathname: `/cast/${resolveCastName(item.name)}`,
            state: { id: item.id },
        })
    }

    return (
        <>
            <styled.Casts>
                <styled.List>
                    {cast.results
                        ? cast.results.map((item) => {
                              return (
                                  <styled.Item
                                      key={item.id}
                                      onClick={() => {
                                          toCast(item)
                                      }}
                                  >
                                      <div>
                                          <CustomImg
                                              src={item?.profile_path}
                                              type={"people"}
                                              style={{
                                                  width: "100%",
                                                  height: "420px",
                                              }}
                                          ></CustomImg>
                                      </div>
                                      <styled.Info>
                                          <styled.Name>{item.name}</styled.Name>
                                          <styled.Character>
                                              {item.known_for_department}
                                          </styled.Character>
                                      </styled.Info>
                                  </styled.Item>
                              )
                          })
                        : null}
                </styled.List>
                <Pagination type={"cast"} />
            </styled.Casts>
        </>
    )
}

export default SearchCast
