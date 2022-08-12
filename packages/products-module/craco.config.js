const cracoModuleFederation = require('craco-module-federation');

module.exports = {
    plugins: [{
        plugin: cracoModuleFederation,
        options: { useNamedChunkIds: true }
    }],
    devServer: {
        port: 3002
    },
    rules: [{
        test: /\.m?js/,
        resolve: {
            fullySpecified: false
        }
    }]
}