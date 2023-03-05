import { getSearchMovie, getSearchCast } from "network/search"

import {
    ADD_SEARCH_MOVIE,
    ADD_SEARCH_CAST,
    ADD_SEARCH_RESULTS,
} from "./constants"

export const addSearchMovieAction = (movie) => ({
    type: ADD_SEARCH_MOVIE,
    movie,
})

export const addSearchCastAction = (cast) => ({
    type: ADD_SEARCH_CAST,
    cast,
})

export const addSearchResults = (results) => ({
    type: ADD_SEARCH_RESULTS,
    results,
})

export const getTotalResultsAction = (query) => {
    // console.log(query)
    return (dispatch) => {
        Promise.all([getSearchMovie(query, 1), getSearchCast(query, 1)])
            .then((res) => {
                let result = []
                result = res.map((item) => {
                    if (item["total_results"] !== 0) {
                        return item["total_results"]
                    }
                })
                dispatch(addSearchResults(result))
            })
            .catch((err) => {
                throw Error(err)
            })
    }
}

export const getSearchMovieAction = (query, page) => {
    // console.log(query)
    return (dispatch) => {
        getSearchMovie(query, page)
            .then((res) => {
                dispatch(addSearchMovieAction(res))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getSearchCastAction = (query, page) => {
    return (dispatch) => {
        getSearchCast(query, page)
            .then((res) => {
                dispatch(addSearchCastAction(res))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
