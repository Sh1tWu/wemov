import React from "react"

export function ErrorHandle({ error, resetErrorBoundary }) {
    const wrapStyle = {
        position: "relative",
        width: "100%",
        height: "500px",
    }

    const basicStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-150px",
        width: "300px",
        height: "250px",
        paddingTop: "100px",
        textAlign: "center",
        backgroundColor: "white",
    }

    return (
        <>
            <div style={wrapStyle}>
                <div style={basicStyle}>
                    <h2>出错了...</h2>
                    <button onClick={resetErrorBoundary}>刷新试试</button>
                </div>
            </div>
        </>
    )
}
