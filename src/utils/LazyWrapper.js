import React, { lazy, Suspense } from "react"

export function dynamic(loadComponent) {
    const LazyComponent = lazy(loadComponent)

    return () => (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    )
}
