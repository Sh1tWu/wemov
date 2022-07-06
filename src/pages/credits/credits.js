import React from "react"
import { useHistory, useParams } from "react-router-dom"

import Banner from "./comps/Banner"
import CastAndCrew from "./comps/CastAndCrew"

function Credits(props) {
    const params = useParams()
    const { movie_id } = params
    return (
        <>
            <Banner id={movie_id} />
            <CastAndCrew id={movie_id} />
        </>
    )
}

export default Credits
