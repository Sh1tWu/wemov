import Axios from "axios"

export default function axios(config) {
    return new Promise((resolve, reject) => {
        const instance = Axios.create({
            timeout: 5000,
        })

        instance.interceptors.request.use(
            (config) => {
                console.log("请求被拦截")
                // config.data = JSON.stringify(config.data)
                // config.headers = {
                //     "Content-Type": "application/x-www-form-urlencoded",
                // }
                // const token = localStorage.getItem("token")
                // if (token) {
                //     config.params = { token: token }
                //     config.headers.token = token
                // }
                // console.log(config)
                return config
            },
            (err) => {
                console.log("来到错误请求")
                console.log(err)
            }
        )

        instance.interceptors.response.use(
            (res) => {
                console.log("响应被拦截")
                // console.log(res)
                return res.data
            },
            (err) => {
                console.log("来到错误响应")
                console.log(err)
            }
        )

        instance(config)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                console.log(err)
            })
    })
}
