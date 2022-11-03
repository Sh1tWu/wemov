import React, { useEffect, useState, useReducer, useMemo } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { useParams, useHistory, useLocation } from "react-router-dom"

import CustomImg from "components/customImg/customImg"

import * as styled from "../style/collection.style"

import { getMoviesAction } from "../../cast/store/actionCreator"

const initialState = { type: "popularity", list: [] }

function reducer(state, action) {
    console.log(action.list)
    if (!action.list) {
        return { type: "popularity", list: [] }
    }
    switch (action.type) {
        case "popularity": {
            const arr = action.list
            const rec = (arr) => {
                if (arr.length === 0) return arr
                const left = []
                const right = []
                const mid = arr[0]
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i].popularity > mid.popularity) {
                        left.push(arr[i])
                    } else {
                        right.push(arr[i])
                    }
                }
                return [...rec(left), mid, ...rec(right)]
            }
            const res = rec(arr)
            return { type: "popularity", list: res }
        }
        case "recent": {
            const arr = action.list
            arr.forEach((item) => {
                return (item.date = Date.parse(item["release_date"]))
            })
            const rec = (arr) => {
                if (arr.length === 0) return arr
                const left = []
                const right = []
                const mid = arr[0]
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i]["date"] > mid["date"]) {
                        left.push(arr[i])
                    } else {
                        right.push(arr[i])
                    }
                }
                return [...rec(left), mid, ...rec(right)]
            }
            const res = rec(arr)
            return { type: "recent", list: res }
        }
        default:
            return { type: "popularity", list: [] }
    }
}

const Collection = () => {
    const reduxDispatch = useDispatch()

    const location = useLocation()
    const { id } = location.state

    const { castMovie, crewMovie } = useSelector(
        (state) => ({
            castMovie: state.people.castMovie,
            crewMovie: state.people.crewMovie,
        }),
        shallowEqual
    )

    const history = useHistory()
    const params = useParams()
    const { apartment } = params

    const map = useMemo(() => {
        const map = new Map()
        map.set("popularity", "最受欢迎")
        map.set("recent", "最近")
        return map
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState)
    const [list, setList] = useState([])
    const [typeMap, setTypeMap] = useState(map)
    const [sortTableShow, setSortTableShow] = useState(false)

    useEffect(() => {
        let mounted = true
        reduxDispatch(getMoviesAction(id))
        return function cleanup() {
            mounted = false
        }
    }, [reduxDispatch])

    useEffect(() => {
        if (apartment.toUpperCase() === "ACTOR") {
            setList(castMovie)
            dispatch({ type: "popularity", list: castMovie })
        } else {
            console.log(apartment)
            setList(crewMovie[apartment])
            dispatch({ type: "popularity", list: crewMovie[apartment] })
        }
    }, [castMovie, crewMovie])

    const toMovie = (movie_id) => {
        history.push(`/introduction/${movie_id}`)
    }

    return (
        <styled.Container>
            <styled.Title>
                {apartment ? apartment.toUpperCase() : ""}
            </styled.Title>
            <styled.ListWrap>
                <styled.SortSelectorWrap>
                    {/* 排序按钮 */}
                    排序:
                    <styled.SortSelector
                        onClick={() => setSortTableShow(!sortTableShow)}
                    >
                        {typeMap.get(state.type)}
                    </styled.SortSelector>
                    <styled.SortSelectorArrow></styled.SortSelectorArrow>
                    {/* 排序表 */}
                    {sortTableShow ? (
                        <styled.SortSelectorTable>
                            <styled.SortSelectorTableItem
                                onClick={() => {
                                    setSortTableShow(false)
                                    if (state.type === "popularity") return
                                    dispatch({ type: "popularity", list })
                                }}
                            >
                                最受欢迎
                            </styled.SortSelectorTableItem>
                            <styled.SortSelectorTableItem
                                onClick={() => {
                                    setSortTableShow(false)
                                    if (state.type === "recent") return
                                    dispatch({ type: "recent", list })
                                }}
                            >
                                最近
                            </styled.SortSelectorTableItem>
                        </styled.SortSelectorTable>
                    ) : null}
                </styled.SortSelectorWrap>

                {state.list
                    ? state.list.map((item) => {
                          return (
                              <styled.Item
                                  key={item.id}
                                  onClick={() => {
                                      toMovie(item.id)
                                  }}
                              >
                                  {/* 影视图片 */}
                                  <styled.ItemImgWrap>
                                      <CustomImg
                                          src={`${item.backdrop_path}`}
                                          style={{
                                              width: "100%",
                                              height: "208px",
                                              margin: "0 auto",
                                          }}
                                      />
                                  </styled.ItemImgWrap>
                                  {/* 影视信息 */}
                                  <styled.Description>
                                      <styled.NameWrap>
                                          <styled.Name>
                                              {item.title}
                                          </styled.Name>
                                      </styled.NameWrap>
                                      <styled.Info>
                                          <styled.Character>
                                              {item.character
                                                  ? item.character
                                                  : item.job}
                                          </styled.Character>
                                          <styled.Date>
                                              {item.release_date}
                                          </styled.Date>
                                      </styled.Info>
                                  </styled.Description>
                              </styled.Item>
                          )
                      })
                    : null}
            </styled.ListWrap>
        </styled.Container>
    )
}

Collection.defaultProps = {
    name: "",
}

Collection.propTypes = {
    name: PropTypes.string,
}

export default Collection
