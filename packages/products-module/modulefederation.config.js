const { dependencies } = require("./package.json");

module.exports = {
    name: "products",
    filename: "products.js",
    exposes: {
        "./products": "./src/modules/Posts.js",
    },
    shared: {
        react: {
            singleton: true,
            requiredVersion: dependencies["react"],
        },
        "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
        },
    }
}