import request from "./request"
import APIKEY from "./APIKEY"

export function getLatestMovie() {
    const url = `/api/movie/latest`
    return request.get(url, { api_key: APIKEY, language: "zh-CN" })
}
