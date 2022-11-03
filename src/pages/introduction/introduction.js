import React, { useEffect, memo } from "react"
import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"

// redux
import { getMovieAction } from "./store/actionCreators"

import Display from "./comps/Display"
import Casts from "./comps/Casts"
import Reviews from "./comps/Reviews"
import Related from "./comps/Related"

function Introduction() {
    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()

    const { movie_id } = params

    useEffect(() => {
        history.listen((location, action) => {
            if (
                document.body.scrollTop ||
                document.documentElement.scrollTop > 0
            ) {
                window.scrollTo(0, 0)
            }
        })
    }, [history])

    useEffect(() => {
        dispatch(getMovieAction(movie_id))
    }, [movie_id])

    return (
        <div>
            <Display />
            {/* <ErrorBoundary FallbackComponent={CastsError}> */}
            <Casts id={movie_id} />
            {/* </ErrorBoundary> */}
            <Reviews id={movie_id} />
            {/* <ErrorBoundary FallbackComponent={RelatedError}> */}
            <Related id={movie_id} />
            {/* </ErrorBoundary> */}
        </div>
    )
}

export default memo(Introduction)
