import axios from "axios"

import { BASE_URL, TIMEOUT } from "./config"

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
})

instance.interceptors.request.use(
    (config) => {
        console.log("请求被拦截")
        return config
    },
    (err) => {
        console.log(err)
    }
)

instance.interceptors.response.use(
    (res) => {
        return res.data
    },
    (err) => {
        if (err && err.response) {
            console.log(err)
        }
    }
)
