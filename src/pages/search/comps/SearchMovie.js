import React from "react"
import { useHistory } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"

import * as styled from "../style/searchMovie.style"

import CustomImg from "components/customImg/customImg"
import Pagination from "../comps/Pagination"

function SearchMovie() {
    const { movie } = useSelector(
        (state) => ({
            movie: state.search.movie,
        }),
        shallowEqual
    )

    // console.log(movie)

    // console.log(`SearchMovie render~`)

    const history = useHistory()

    function toMovie(id) {
        history.push({
            pathname: `/introduction/${id}`,
        })
    }

    return (
        <>
            <styled.Container>
                <styled.ListWrap>
                    {movie
                        ? movie.results.map((item) => {
                              return (
                                  <styled.Item
                                      key={item.id}
                                      onClick={() => {
                                          toMovie(item.id)
                                      }}
                                  >
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
                <Pagination type={"films"} />
            </styled.Container>
        </>
    )
}

export default SearchMovie
