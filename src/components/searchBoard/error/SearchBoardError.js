import React from "react"

export function SearchBoardError({ error, resetErrorBoundary }) {
    console.log(error.message)
    return (
        <>
            <div>
                <p>Something went wrong</p>
                <pre>{error.message}</pre>
                <button onClick={resetErrorBoundary}>再试一遍</button>
            </div>
        </>
    )
}
