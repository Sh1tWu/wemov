import request from "./request"
import APIKEY from "./APIKEY"

export function getReviews(id) {
    const url = `/api/movie/${id}/reviews`
    return request.get(url, { api_key: APIKEY, page: 1 })
}
