import request from "./request"
import APIKEY from "./APIKEY"

// 获取每日推荐电影榜单
function getRecommendList() {
    const url = `/api/trending/movie/day`
    return request.get(url, { api_key: APIKEY, language: "zh-CN" })
}

export { getRecommendList }
