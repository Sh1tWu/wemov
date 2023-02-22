import Axios from "axios"

const axiosInstance = Axios.create({
    timeout: 5000,
})

instance.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        console.log("来到错误请求")
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        console.log("来到错误响应")
        return Promise.reject(err)
    }
)

export default axiosInstance
