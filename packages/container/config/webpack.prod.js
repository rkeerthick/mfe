const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN.replace(/\/$/, "");
if (!domain || !String(domain).trim()) {
    throw new Error(
        'PRODUCTION_DOMAIN must be set for production builds (no trailing slash), e.g. https://d2pa88i9w4z9o6.cloudfront.net. ' +
        'In GitHub Actions,, set repository secret PRODUCTION_DOMAIN and pass it on the npm run build step.'
    );
}

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: "auto",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        })
    ],
}

module.exports = merge(commonConfig, prodConfig);