import request from "./request"
import APIKEY from "./APIKEY"

function getPerson(id) {
    const url = `/api/person/${id}/movie_credits`
    return request.get(url, { api_key: APIKEY, language: "zh-CN" })
}

export default getPerson
