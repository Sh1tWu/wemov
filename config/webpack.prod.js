const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackBundleAnalyzer =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const PurgeCssPlugin = require("purgecss-webpack-plugin")
// const glob = require("glob")
const CompressionWebpackPlugin = require("compression-webpack-plugin")
// const webpack = require("webpack")
const TerserPlugin = require("terser-webpack-plugin")

const resolveApp = require("./paths")

module.exports = {
    mode: "production",
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
    },
    optimization: {
        // minimize: true,
        minimizer: [
            new CssMinimizerPlugin(
                {
                    minimizerOptions: {
                        preset: [
                            "default",
                            {
                                discardComments: { removeAll: true },
                            },
                        ],
                    },
                },
                new TerserPlugin({
                    parallel: true,
                    extractComments: false,
                    // terserOptions: {
                    //     compress: {
                    //         arguments: true,
                    //         dead_code: true,
                    //     },
                    //     mangle: true,
                    //     toplevel: true,
                    //     keep_classnames: false,
                    //     keep_fnames: false,
                    // },
                    minify: TerserPlugin.swcMinify,
                })
            ),
        ],
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
