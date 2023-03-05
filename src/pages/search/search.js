import React, { memo, useEffect } from "react"
import { Switch, Route, useHistory, useLocation } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"
import { useDispatch } from "react-redux"
import qs from "querystring"

import * as styled from "./style/search.style"

import SearchCast from "./comps/SearchCast"
import SearchMovie from "./comps/SearchMovie"

import {
    getTotalResultsAction,
    getSearchMovieAction,
    getSearchCastAction,
} from "./store/actionCreator"

function Search() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { search } = useLocation()
    const { query } = qs.parse(search.replace(/^\?/, ""))

    const { movieResults, castResults } = useSelector(
        (state) => ({
            movieResults: state.search.movieTotalResults,
            castResults: state.search.castTotalResults,
        }),
        shallowEqual
    )

    useEffect(() => {
        dispatch(getTotalResultsAction(query))
        dispatch(getSearchMovieAction(query))
        dispatch(getSearchCastAction(query))
        // console.log(query)
    }, [query])

    function toSearchMovie() {
        history.push({
            pathname: "/search/films",
            search: `query=${query}&page=${1}`,
        })
    }

    function toSearchCast() {
        history.push({
            pathname: "/search/cast",
            search: `query=${query}&page=${1}`,
        })
    }

    return (
        <>
            <styled.TapBar>
                <styled.TapBarItem onClick={toSearchMovie}>
                    <styled.TapBarItemText>影片</styled.TapBarItemText>
                    <styled.TapBarItemText>
                        {movieResults}
                    </styled.TapBarItemText>
                </styled.TapBarItem>
                <styled.TapBarItem onClick={toSearchCast}>
                    <styled.TapBarItemText>演员 & 职员</styled.TapBarItemText>
                    <styled.TapBarItemText>{castResults}</styled.TapBarItemText>
                </styled.TapBarItem>
            </styled.TapBar>

            <Switch>
                <Route
                    path={"/search/films"}
                    component={SearchMovie}
                    exact={true}
                ></Route>
                <Route
                    path={"/search/cast"}
                    component={SearchCast}
                    exact={true}
                ></Route>
            </Switch>
        </>
    )
}

export default memo(Search)
