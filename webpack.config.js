const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: [
                /src/,
                '/node_modules/mint-ui/lib/'
            ],
            loader: "style!css",
            // query: {
            //     presets: ['es2015']
            // },
            use: [
                // [style-loader](/loaders/style-loader)
                {
                    loader: 'style-loader'
                },
                // [css-loader](/loaders/css-loader)
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },
                // [sass-loader](/loaders/sass-loader)
                {
                    loader: 'sass-loader'
                }
            ]
        }]
    }

}