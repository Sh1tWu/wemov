import axiosInstance from "./axios"

const request = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axiosInstance
                .get(url, { params: params || {} })
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
        return new Promise((resolve, reject) => {
            axiosInstance
                .post(url, { params: params || {} })
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

export default request
