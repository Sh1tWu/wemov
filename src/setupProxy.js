const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://api.themoviedb.org/3",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
            onProxyReq: (req, res) => {
                console.log(req)
                console.log(res)
            },
        })
    )
    app.use(
        "/img",
        createProxyMiddleware({
            target: "https://image.tmdb.org/t/p",
            changeOrigin: true,
            pathRewrite: {
                "^/img": "",
            },
            onProxyReq: (req, res) => {
                console.log(req)
                console.log(res)
            },
        })
    )
}
