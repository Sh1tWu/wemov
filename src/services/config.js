const devBaseURL = "https://jsonplaceholder.typicode.com"
const proBaseURL = ""

export const BASE_URL =
    process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL

export const TIMEOUT = 5000
