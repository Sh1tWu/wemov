const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackBundleAnalyzer =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const PurgeCssPlugin = require("purgecss-webpack-plugin")
const glob = require("glob")
const CompressionWebpackPlugin = require("compression-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

const resolveApp = require("./paths")

module.exports = {
    mode: "production",
    // externals: {
    //     react: "React",
    //     "react-dom": "ReactDOM",
    // },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                //     parallel: true,
                //     extractComments: false,
                //     terserOptions: {
                //         compress: {
                //             arguments: true,
                //             dead_code: true,
                //         },
                //         mangle: true,
                //         toplevel: true,
                //         keep_classnames: false,
                //         keep_fnames: false,
                //     },
                //     minify: TerserPlugin.swcMinify,
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ],
        // chunkIds: isProduction ? "deterministic" : "named",
        splitChunks: {
            chunks: "all",
            minSize: 200 * 1024,
            maxSize: 200 * 1024,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: "chunk-vendors",
                    reuseExistingChunk: true,
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
        runtimeChunk: {
            name: (entryPoint) => `runtime~${entryPoint.name}`,
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new WebpackBundleAnalyzer(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
        }),
        // new PurgeCssPlugin({
        //     paths: glob.sync(`${resolveApp("./src")}/**/*`, { nodir: true }),
        //     safelist: function () {
        //         return {
        //             standard: ["body"],
        //         }
        //     },
        // }),
        new CompressionWebpackPlugin({
            threshold: 0,
            test: /\.(css|js)$/i,
            minRatio: 0.8,
            algorithm: "gzip",
        }),
    ],
}
