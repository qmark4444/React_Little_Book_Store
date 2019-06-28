module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    }
}