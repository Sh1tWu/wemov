const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const resolveApp = require("./paths")

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins: [new ReactRefreshWebpackPlugin()],
    optimization: {
        usedExports: true,
    },
    devServer: {
        port: 8080,
        hot: "only",
        compress: true,
        // static:
        proxy: {
            "/api": {
                target: "http://api.themoviedb.org/3",
                pathRewrite: {
                    "^/api": "",
                },
                // secure: false,
                changeOrigin: true,
            },
            "/img": {
                target: "http://image.tmdb.org/t/p",
                changeOrigin: true,
                pathRewrite: {
                    "^/img": "",
                },
                // secure: true,
                changeOrigin: true,
            },
        },
        historyApiFallback: true,
        // {
        //     rewrites: [
        //         {
        //             from: /abc/,
        //             to: "index.html",
        //         },
        //     ],
        // },
    },
}
