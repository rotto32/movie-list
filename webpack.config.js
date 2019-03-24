var path = require('path');
var SRC_DIR = path.join(__dirname, '/Components');
var DIST_DIR = path.join(__dirname, '/Public');

module.exports = {
    entry: `${SRC_DIR}/main.jsx`,
    output: {
        filename: 'main.js',
        path: DIST_DIR
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};