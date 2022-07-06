function classifyMovie(jobs, list) {
    // let movieObject = {}

    // jobs.forEach((item) => {
    //     Object.defineProperty(movieObject, item, {
    //         value: [],
    //         writable: true,
    //     })
    // })

    // list.forEach((item) => {
    //     if (movieObject.hasOwnProperty(item.job)) {
    //         movieObject[item.job].push(item)
    //     }
    // })

    // return movieObject

    let movieMap = new Map()

    jobs.forEach((item) => {
        movieMap.set(item, [])
    })

    list.forEach((item) => {
        if (movieMap.has(item.job)) {
            let temp = movieMap.get(item.job)
            // console.log(temp)
            movieMap.get(item.job, temp.unshift(item))
        }
    })

    // console.log(movieMap)

    return movieMap
}

export default classifyMovie
