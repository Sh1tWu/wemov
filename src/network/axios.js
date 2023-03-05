import Axios from "axios"

const axiosInstance = Axios.create({
    timeout: 10000,
})

axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        console.log("来到错误请求")
        return Promise.reject(err)
    }
)

axiosInstance.interceptors.response.use(
    (res) => {
        return res.data
    },
    (err) => {
        console.log("来到错误响应")
        return Promise.reject(err)
    }
)

export default axiosInstance
