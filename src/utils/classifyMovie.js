function classifyMovie(jobs, list) {
    let movieMap = new Map()

    jobs.forEach((item) => {
        movieMap.set(item, [])
    })

    list.forEach((item) => {
        if (movieMap.has(item.job)) {
            let temp = movieMap.get(item.job)
            movieMap.get(item.job, temp.unshift(item))
        }
    })

    return movieMap
}

export default classifyMovie
