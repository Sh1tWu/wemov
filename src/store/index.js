import { createStore, applyMiddleware, compose } from "redux"

import thunk from "redux-thunk"

import rootReducer from "./reducer"

// composeEnhances函数
const composeEnhances =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

// 中间件应用
const storeEnhancer = applyMiddleware(thunk)

// store
const store = createStore(rootReducer, composeEnhances(storeEnhancer))

export default store
