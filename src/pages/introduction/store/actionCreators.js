import { ADD_MOVIE, ADD_CASTS, ADD_REVIEWS, CLEAR_DATA } from "./constants"
import { getMovie } from "network/movie"
import { getCasts } from "network/casts"
import { getReviews } from "network/reviews"

import resolveAvatarPath from "utils/resolveAvatarPath"
import resolveDate from "utils/resolveDate"

export const addMovieAction = (movie) => ({
    type: ADD_MOVIE,
    movie,
})

export const addCastsAction = (casts) => ({
    type: ADD_CASTS,
    casts,
})

export const addReviewsAction = (reviews) => ({
    type: ADD_REVIEWS,
    reviews,
})

export const clearMovieData = () => {
    return {
        type: CLEAR_DATA,
    }
}

export const getMovieAction = (id) => {
    return (dispatch) => {
        getMovie(id)
            .then((res) => {
                dispatch(addMovieAction(res))
            })
            .catch((err) => {
                throw Error(err)
            })
    }
}

export const getCastsAction = (id) => {
    return (dispatch) => {
        getCasts(id)
            .then((res) => {
                dispatch(addCastsAction(res.cast))
            })
            .catch((err) => {
                throw Error(err)
            })
    }
}

export const getReviewsAction = (id) => {
    return (dispatch) => {
        getReviews(id)
            .then((res) => {
                res.results.forEach((item) => {
                    if (item.author_details.avatar_path) {
                        item.author_details.avatar_path = resolveAvatarPath(
                            item.author_details.avatar_path
                        )
                    }
                    if (item.updated_at) {
                        item.updated_at = resolveDate(item.updated_at)
                    }
                })
                dispatch(addReviewsAction(res.results))
            })
            .catch((err) => {
                throw Error(err)
            })
    }
}
