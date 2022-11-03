import React, { memo, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"

import * as styled from "./style/searchBoard.style"

import CustomImg from "components/customImg/customImg"

import resolveCastName from "utils/resolveCastName"

// error boundary
// import { SearchBoardError } from "components/errorBoundary/searchBoundaryError/SearchBoardError"

function SearchBoard({ movieList, castList, setBoardShow, query }) {
    // useCallback(() => {
    //     if (movieList) {
    //         throw Error("MOVIE_LIST_ERROR")
    //     }
    //     if (castList) {
    //         throw Error("CAST_LIST_ERROR")
    //     }
    //     if (query) {
    //         throw Error("QUERY_ERROR")
    //     }
    // }, [movieList, castList, query])

    const history = useHistory()

    function toMovie(id) {
        setBoardShow(false)
        history.push({
            pathname: `/introduction/${id}`,
        })
    }

    function toCast(name, id) {
        console.log(name, id)
        history.push({
            pathname: `/cast/${resolveCastName(name)}`,
            state: { id },
        })
        setBoardShow(false)
    }

    function toSearch() {
        history.push({
            pathname: `/search/films`,
            search: `query=${query}&page=${1}`,
        })
        setBoardShow(false)
    }

    return (
        <>
            <styled.Container>
                {/* <ErrorBoundary FallbackComponent={SearchBoardError}> */}
                {/* 影片 */}
                <styled.BoardWrap>
                    <styled.TitleWrap>
                        <styled.Title>影片</styled.Title>
                        <styled.TitleNumber>
                            {movieList.total}
                        </styled.TitleNumber>
                    </styled.TitleWrap>

                    {JSON.stringify(movieList) !== "{}"
                        ? movieList.results.map((item) => {
                              return (
                                  <styled.BoardItem
                                      key={item.id}
                                      onClick={() => {
                                          toMovie(item.id)
                                      }}
                                  >
                                      {/* 图片 */}
                                      <styled.BoardItemImgWrap>
                                          <CustomImg
                                              src={item.poster_path}
                                          ></CustomImg>
                                      </styled.BoardItemImgWrap>

                                      {/* 信息 */}
                                      <styled.BoardItemInfo>
                                          {/* {名字} */}
                                          <styled.BoardItemName>
                                              {item.original_title}
                                          </styled.BoardItemName>
                                          <styled.BoardItemDirector>
                                              {item.release_date}
                                          </styled.BoardItemDirector>
                                      </styled.BoardItemInfo>
                                  </styled.BoardItem>
                              )
                          })
                        : null}
                </styled.BoardWrap>

                {/* 演职员 */}
                <styled.BoardWrap>
                    <styled.TitleWrap>
                        <styled.Title>演职员</styled.Title>
                        <styled.TitleNumber>
                            {castList.total}
                        </styled.TitleNumber>
                    </styled.TitleWrap>

                    {JSON.stringify(castList) !== "{}"
                        ? castList.results.map((item) => {
                              return (
                                  <styled.BoardItem
                                      key={item.id}
                                      onClick={() => {
                                          toCast(item.name, item.id)
                                      }}
                                  >
                                      {/* 图片 */}
                                      <styled.BoardItemImgWrap>
                                          <CustomImg
                                              src={item.profile_path}
                                          ></CustomImg>
                                      </styled.BoardItemImgWrap>

                                      {/* 信息 */}
                                      <styled.BoardItemInfo>
                                          {/* {名字} */}
                                          <styled.BoardItemName>
                                              {item.name}
                                          </styled.BoardItemName>
                                      </styled.BoardItemInfo>
                                  </styled.BoardItem>
                              )
                          })
                        : null}
                </styled.BoardWrap>

                {/* 展示全部 */}
                <styled.DisplayAll onClick={toSearch}>
                    查看更多
                </styled.DisplayAll>
                {/* </ErrorBoundary> */}
            </styled.Container>
            {/* ) : null} */}
        </>
    )
}

export default memo(SearchBoard)
