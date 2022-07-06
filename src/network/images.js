import request from "./request"

function getImages(path, size = "original") {
    let url = `/img/w${size} + ${path}`
    // console.log(url)
    return request.get(url)
}

export { getImages }
