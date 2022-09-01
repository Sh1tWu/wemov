const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const resolveApp = require("./paths")

module.exports = {
    mode: "development",
    devtool: "cheap-source-map",
    plugins: [new ReactRefreshWebpackPlugin()],
    devServer: {
        port: 8080,
        hot: "only",
        compress: true,
        // static:
        proxy: {
            "/api": {
                target: "https://api.themoviedb.org/3",
                pathRewrite: {
                    "^/api": "",
                },
                secure: false,
                changeOrigin: true,
            },
            "/img": {
                target: "https://image.tmdb.org/t/p",
                changeOrigin: true,
                pathRewrite: {
                    "^/img": "",
                },
                secure: true,
                changeOrigin: true,
            },
        },
        historyApiFallback: {
            rewrites: [
                {
                    from: /abc/,
                    to: "index.html",
                },
            ],
        },
    },
}
