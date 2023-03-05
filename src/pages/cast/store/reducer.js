import {
    ADD_PERSONALITYINFORMATION,
    ADD_CASTMOVIE,
    ADD_CREWMOVIE,
    ADD_PERSONID,
    CLEAR_DATA,
} from "./constants"

const defaultState = {
    personId: "",
    personalityInformation: {},
    castMovie: [],
    crewMovie: [],
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PERSONALITYINFORMATION:
            return {
                ...state,
                personalityInformation: action.info,
            }
        case ADD_CASTMOVIE:
            return {
                ...state,
                castMovie: action.castMovie,
            }
        case ADD_CREWMOVIE:
            return {
                ...state,
                crewMovie: action.crewMovie,
            }
        case CLEAR_DATA:
            return {
                personId: "",
                personalityInformation: {},
                castMovie: [],
                crewMovie: [],
            }
        default:
            return state
    }
}

export default reducer
