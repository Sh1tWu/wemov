import React from "react"
import { ErrorBoundary } from "react-error-boundary"

import Recommend from "./comps/Recommend"
import CarouselQueue from "./comps/CarouselQueue"
import Carousel from "./comps/Carousel"

import { CarouselQueueError } from "./error/CarouselQueueError"

export default function Home() {
    return (
        <div>
            <Recommend />
            <ErrorBoundary FallbackComponent={CarouselQueueError}>
                <CarouselQueue />
            </ErrorBoundary>
            <Carousel />
        </div>
    )
}
