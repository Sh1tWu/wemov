import React from "react"

import styles from "../style/carousel.module.scss"

function Carousel() {
    return (
        <div className={styles.carousel}>
            <div className={styles.display}></div>
            <div className={styles.description}></div>
        </div>
    )
}

export default Carousel
