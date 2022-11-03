// 合并Reducers
// import { combineReducers } from "redux-immutable"
import { combineReducers } from "redux"

import { reducer as homeReducer } from "pages/home/store/index"
import { reducer as introductionReducer } from "pages/introduction/store/index"
import { reducer as peopleReducer } from "pages/cast/store/index"
import { reducer as searchReducer } from "pages/search/store/index"

const rootReducer = combineReducers({
    home: homeReducer,
    introduction: introductionReducer,
    people: peopleReducer,
    search: searchReducer,
})

export default rootReducer
