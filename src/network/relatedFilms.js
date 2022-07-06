import request from "./request"
import APIKEY from "./APIKEY"

function getRelatedFilms(id) {
    const url = `/api/movie/${id}/similar`
    return request.get(url, { api_key: APIKEY, language: "zh-CN" })
}

export default getRelatedFilms
