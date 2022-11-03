import {
    ADD_SEARCH_CAST,
    ADD_SEARCH_MOVIE,
    ADD_SEARCH_RESULTS,
} from "./constants"

const defaultState = {
    movie: {
        results: [],
        total_pages: 0,
    },
    cast: {
        results: [],
        total_pages: 0,
    },
    movieTotalResults: 0,
    castTotalResults: 0,
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_SEARCH_MOVIE: {
            return {
                ...state,
                movie: {
                    results: action.movie.results,
                    total_pages: action.movie.total_pages,
                    total_results: action.movie.total_results,
                },
            }
        }
        case ADD_SEARCH_CAST: {
            return {
                ...state,
                cast: {
                    results: action.cast.results,
                    total_pages: action.cast.total_pages,
                    total_results: action.cast.total_results,
                },
            }
        }
        case ADD_SEARCH_RESULTS: {
            return {
                ...state,
                movieTotalResults: action.results[0],
                castTotalResults: action.results[1],
            }
        }
        default:
            return state
    }
}

export default reducer
