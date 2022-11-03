import React from "react"

export function RelatedError({ error, resetErrorBoundary }) {
    const wrapStyle = {
        width: "80%",
        margin: "0 auto",
        marginTop: "30px",
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
                    <button style={btnStyle} onClick={resetErrorBoundary}>
                        刷新试试
                    </button>
                </div>
            </div>
        </>
    )
}
