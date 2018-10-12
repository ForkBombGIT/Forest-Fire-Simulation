var path = require('path');

module.exports = {
    mode: 'production',
    entry: './components/ForestFire.js',
    output: {
        path: path.resolve('lib'),
        filename: 'ForestFire.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
