import { createStore, applyMiddleware, compose } from "redux"

import thunk from "redux-thunk"

// import { persistStore, persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"

import rootReducer from "./reducer"

// composeEnhances函数
const composeEnhances =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

// 中间件应用
const storeEnhancer = applyMiddleware(thunk)

// persist
// const rootPersistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["people"],
// }

// persistedReducer
// const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

// store
export const store = createStore(
    // persistedReducer,
    rootReducer,
    composeEnhances(storeEnhancer)
)

// persisStore
// export const persistor = persistStore(store)
