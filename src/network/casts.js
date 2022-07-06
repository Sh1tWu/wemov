import request from "./request"
import APIKEY from "./APIKEY"

export function getCasts(id) {
    const url = `/api/movie/${id}/credits`
    return request.get(url, { api_key: APIKEY, language: "zh-CN" })
}
