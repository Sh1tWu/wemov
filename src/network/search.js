import request from "./request"
import APIKEY from "./APIKEY"

export function getSearchMovie(query, page) {
    const url = `/api/search/movie`
    return request.get(url, { api_key: APIKEY, query, page })
}

export function getSearchCast(query, page) {
    const url = `/api/search/person`
    return request.get(url, { api_key: APIKEY, query, page })
}
