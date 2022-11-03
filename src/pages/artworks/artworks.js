import React, { memo } from "react"
import PropTypes from "prop-types"

import Collection from "./comps/Collection"
import * as styled from "./style/artwork.style"

const ArtWorks = () => {
    return (
        <>
            <styled.Banner>
                <styled.BannerTitle></styled.BannerTitle>
            </styled.Banner>
            <Collection />
        </>
    )
}

ArtWorks.defaultProps = {
    job: "",
}

ArtWorks.propTypes = {
    job: PropTypes.string,
}

export default ArtWorks
