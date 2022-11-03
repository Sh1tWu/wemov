import React from "react"

export function CarouselQueueError({ error, resetErrorBoundary }) {
    const wrapStyle = {
        width: "90%",
        margin: "0 auto",
        backgroundColor: "white",
    }

    const basicStyle = {
        width: "300px",
        height: "300px",
        margin: "0 auto",
        marginTop: "50px",
        paddingTop: "100px",
        textAlign: "center",
    }

    const btn = {
        padding: "10px",
        outline: "none",
        border: "0",
        color: "white",
        cursor: "pointer",
        backgroundColor: "black",
    }

    return (
        <>
            <div style={wrapStyle}>
                <div style={basicStyle}>
                    <h2>出错了...</h2>
                    <button style={btn} onClick={resetErrorBoundary}>
                        刷新试试
                    </button>
                </div>
            </div>
        </>
    )
}
