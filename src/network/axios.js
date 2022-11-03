import Axios from "axios"

export default function axios(config) {
    return new Promise((resolve, reject) => {
        const instance = Axios.create({
            timeout: 5000,
        })

        instance.interceptors.request.use(
            (config) => {
                return config
            },
            (err) => {
                console.log("来到错误请求")

                const delay = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, 1000)
                })

                return delay
                    .then(() => axios(config))
                    .catch((err) => {
                        reject(err)
                    })
            }
        )

        instance.interceptors.response.use(
            (res) => {
                resolve(res.data)
            },
            (err) => {
                console.log("来到错误响应")
                reject(err)
            }
        )

        instance(config)
    })
}
