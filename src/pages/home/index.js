import React from "react"

import Recommend from "./comps/Recommend"
import CarouselQueue from "./comps/CarouselQueue"
import Carousel from "./comps/Carousel"

import EldenRing from "../../assets/img/testImg/sourceImg/EldenRing.png"
import EldenRing2 from "../../assets/img/testImg/carouselQueueImg/EldenRing.png"

export default function Home() {
    return (
        <div>
            <Recommend />
            <CarouselQueue />
            <Carousel />
        </div>
    )
}
