const cracoModuleFederation = require('craco-module-federation');

module.exports = {
    plugins: [{
        plugin: cracoModuleFederation,
        options: { useNamedChunkIds: true }
    }],
    rules: [{
        test: /\.m?js/,
        resolve: {
            fullySpecified: false
        }
    }]
}