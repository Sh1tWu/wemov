const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { DefinePlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { merge } = require("webpack-merge")

const resolveApp = require("./paths")
const prodConfig = require("./webpack.prod")
const devConfig = require("./webpack.dev")

// let isProduction = false

const commonConfig = (isProduction = false) => {
    return {
        entry: "./src/index.js",
        output: {
            path: resolveApp("./dist"),
            filename: "js/[name].[chunkhash:6].bundle.js",
            // 想定制[name]就来点magic comments
            chunkFilename: "js/[name].[contenthash:6].chunk.js",
        },
        resolve: {
            extensions: [".js", ".json", ".jsx"],
            alias: {
                "@": resolveApp("./src"),
                public: resolveApp("./public"),
                assets: resolveApp("./src/assets"),
                components: resolveApp("./src/components"),
                hooks: resolveApp("./src/hooks"),
                network: resolveApp("./src/network"),
                pages: resolveApp("./src/pages"),
                services: resolveApp("./src/services"),
                store: resolveApp("./src/store"),
                utils: resolveApp("./src/utils"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/i,
                    exclude: /node_modules/,
                    use: "babel-loader",
                },
                {
                    test: /\.css$/i,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        {
                            loader: "css-loader",
                            options: { modules: undefined, importLoaders: 1 },
                        },
                        "postcss-loader",
                    ],
                    sideEffects: true,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        {
                            loader: "css-loader",
                            options: { modules: undefined, importLoaders: 1 },
                        },
                        "postcss-loader",
                        "sass-loader",
                    ],
                    sideEffects: true,
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset",
                    generator: {
                        filename: "img/[name].[hash:6][ext]",
                    },
                    parser: {
                        dataUrlCondition: {
                            maxSize: 100 * 1024,
                        },
                    },
                },
                {
                    test: /\.(woff2?|eot|ttf)$/,
                    type: "asset/resource",
                    generator: {
                        filename: "font/[name].[hash:6].[ext]",
                    },
                },
            ],
        },
        plugins: [
            // new DefinePlugin({
            //     PUBLIC_URL: "./public",
            // }),
            new HtmlWebpackPlugin({
                template: "public/index.html",
                title: "WeMov",
                favicon: "./public/favicon.ico",
                cache: true,
                minify: isProduction ? true : false,
            }),
        ],
        optimization: {
            // chunkIds: isProduction ? "deterministic" : "named",
            splitChunks: {
                chunks: "all",
                minSize: 200 * 1024,
                maxSize: 200 * 1024,
                minChunks: 2,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        name: "chunk-vendors",
                        // filename: "vendors_[id].js",
                    },
                    common: {
                        minChunks: 2,
                        priority: -20,
                        name: "chunk-common",
                        reuseExistingChunk: true,
                        // filename: "common_[id].js",
                    },
                },
            },
            runtimeChunk: "single",
        },
        // stats: "errors-only",
    }
}

module.exports = function (env) {
    isProduction = env.production
    process.env.NODE_ENV = isProduction ? "production" : "development"
    const config = isProduction ? prodConfig : devConfig
    const mergeConfig = merge(commonConfig(isProduction), config)

    return mergeConfig
}
