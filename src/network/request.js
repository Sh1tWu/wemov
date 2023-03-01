import axiosInstance from "./axios"

const http = {
    get(url, params) {
        params = params || {}
        return new Promise((resolve, reject) => {
            axiosInstance
                .get(url, { params })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    },
    post(url, params) {
        params = params || {}
        return new Promise((resolve, reject) => {
            axiosInstance
                .post(url, { params })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    },
}

export default http
