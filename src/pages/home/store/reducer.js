import { ADD_RECOMMENDLIST, ADD_IMAGES, ADD_LATESTMOVIE } from "./constant"

const defaultState = {
    firstMovie: {},
    recommendList: [],
    imagesList: [],
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_RECOMMENDLIST:
            return {
                ...state,
                firstMovie: action.list.splice(0, 1),
                recommendList: action.list,
            }
        case ADD_IMAGES:
            return { ...state, imagesList: action.path }
        case ADD_LATESTMOVIE:
            return { ...state, latestMovie: action.movie }
        default:
            return state
    }
}

export default reducer
