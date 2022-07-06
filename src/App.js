import React, { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"

import TopBar from "./components/topbar/topbar"

import routes from "./routes"

function App() {
    return (
        <div className="App">
            <TopBar />
            <Suspense fallback={<div>Loading..</div>}>
                <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
            </Suspense>
        </div>
    )
}

export default App
