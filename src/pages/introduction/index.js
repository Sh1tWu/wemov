import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

// redux
import { getMovieAction } from "./store/actionCreators"

import Display from "./comps/Display"
import Casts from "./comps/Casts"
import Preview from "./comps/Preview"
import Reviews from "./comps/Reviews"
import Related from "./comps/Related"

export default function Introduction(props) {
    const { movie_id } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieAction(movie_id))
    }, [dispatch])

    return (
        <div>
            <Display id={movie_id} />
            <Casts id={movie_id} />
            {/* <Preview /> */}
            <Reviews id={movie_id} />
            <Related id={movie_id} />
        </div>
    )
}
