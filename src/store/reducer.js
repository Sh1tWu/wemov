// 合并Reducers
import { combineReducers } from "redux-immutable"

import { reducer as homeReducer } from "@/pages/home/store/index"
import { reducer as introductionReducer } from "@/pages/introduction/store/index"

const rootReducer = combineReducers({
    home: homeReducer,
    introduction: introductionReducer,
})

export default rootReducer
