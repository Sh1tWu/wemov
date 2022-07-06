import request from "./request"

import APIKEY from "./APIKEY"

export default function getBackground(id) {
    const url = `/api/movie/${id}/images`
    return request.get(url, { api_key: APIKEY })
}
