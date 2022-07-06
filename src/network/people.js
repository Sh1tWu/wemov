import request from "./request"

import APIKEY from "./APIKEY"

function getPeople(id) {
    const url = `/api/person/${id}`
    return request.get(url, { api_key: APIKEY })
}

export default getPeople
