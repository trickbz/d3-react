var path = require('path');

var config = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: ''
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    devTool: 'eval-source-map'
};

module.exports = config;