import axios from "./axios"

const http = {
    get(url, params) {
        const config = {
            method: "get",
            url: url,
        }
        if (params) config.params = params
        return axios(config)
    },
    post(url, params) {
        const config = {
            method: "post",
            url: url,
        }
        if (params) config.data = params
        return axios(config)
    },
}

export default http
