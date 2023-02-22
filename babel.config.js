const presets = [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: "3" }],
    ["@babel/preset-react"],
]

const plugins = [
    [
        "@babel/plugin-transform-runtime",
        {
            corejs: false,
            helpers: true,
            regenerator: false,
        },
    ],
    [
        "babel-plugin-styled-components",
        {
            minify: true,
            transpileTemplateLiterals: true,
            pure: true,
        },
    ],
]
const isProduction = process.env.NODE_ENV === "production"

if (!isProduction) {
    plugins.push(["react-refresh/babel"])
}

module.exports = {
    presets,
    // : [
    //     [
    //         "@babel/preset-env",
    //         {
    //             useBuiltIns: "usage",
    //             corejs: "3",
    //         },
    //     ],
    //     ["@babel/preset-react"],
    // [
    //     "@babel/plugin-transform-runtime",
    //     {
    //         corejs: 3,
    //     },
    // ],
    // ],
    plugins,
    // : [
    // ["react-refresh/babel"],
    // ["@babel/plugin-transform-runtime"],
    // [
    //     "import",
    //     {
    //         libraryName: "antd",
    //         libraryDirectory: "lib",
    //         style: true,
    //     },
    //     "antd",
    // ],
    // ],
}
