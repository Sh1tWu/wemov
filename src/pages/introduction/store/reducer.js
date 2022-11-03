import { ADD_MOVIE, ADD_CASTS, ADD_REVIEWS } from "./constants"

const defaultState = {
    movie: {},
    casts: [],
    reviewsList: [],
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_MOVIE:
            return { ...state, movie: action.movie }
        case ADD_CASTS:
            return { ...state, casts: action.casts }
        case ADD_REVIEWS:
            return { ...state, reviewsList: action.reviews }
        default:
            return state
    }
}

export default reducer
