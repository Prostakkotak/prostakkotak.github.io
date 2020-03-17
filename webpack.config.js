const path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './assets/'),
    mode: 'development',
    entry: {
        index: [
            './js/header.js',
            './js/slider.js',
            './js/scroll-animation-index.js'
        ],
        about: './js/header.js',
        portfolio: [
            './js/header.js',
            './js/gallery.js',
            './js/share.js'
        ],
        blog: [
            './js/header.js',
            './js/blog-sidebar.js',
            './js/scroll-animation-blog.js'
        ],
        contact: './js/header.js',
        styles: './styles/style.scss'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: '../*.html',
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            server: { baseDir: ['./']}
        })
    ]
}