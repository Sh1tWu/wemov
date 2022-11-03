import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
// import { PersistGate } from "redux-persist/integration/react"

import App from "./App"
import { store } from "store/index"

import "assets/css/index.global.css"
import "assets/css/reset.global.css"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
            {/* </PersistGate> */}
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
