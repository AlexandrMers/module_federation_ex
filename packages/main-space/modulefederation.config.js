const { dependencies } = require("./package.json");

module.exports = {
    name: "workspace",
    filename: "workspace.js",
    remotes: {
        search: "search@http://localhost:3001/search.js",
        products: "products@http://localhost:3002/products.js",
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
};