const path = require("path")

const resolves = (dir) => path.resolve(__dirname, dir)

module.exports = {
    webpack: {
        alias: {
            "@": resolves("src"),
        },
    },
}
