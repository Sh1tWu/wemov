import React from "react"
import { renderRoutes } from "react-router-config"
import { ErrorBoundary } from "react-error-boundary"

import TopBar from "./components/topbar/topbar"

import routes from "./routes"

import { ErrorHandle } from "components/errorBoundary/ErrorHandle"

function App() {
    return (
        <div className="App">
            <ErrorBoundary FallbackComponent={ErrorHandle}>
                <TopBar />
                {renderRoutes(routes)}
            </ErrorBoundary>
        </div>
    )
}

export default App
