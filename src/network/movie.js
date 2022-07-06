import request from "./request"
import APIKEY from "./APIKEY"

export function getMovie(id) {
    const url = `/api/movie/${id}`
    return request.get(url, { api_key: APIKEY, language: "zh-CN" })
}
