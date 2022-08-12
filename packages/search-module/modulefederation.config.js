const { dependencies } = require("./package.json");

module.exports = {
    name: "search",
    filename: "search.js",
    exposes: {
        "./search": "./src/App.js",
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