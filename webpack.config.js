const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js',
        },
        devServer: {
            port: 3000,
            open: true,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
        performance: {
            hints: "warning"
        },
        stats: {
            preset: "errors-only",
            // logging: true,
            // loggingDebug: /webpack/,

            errors: true,
            // show errors
            errorDetails: true,
            // show details for errors
            errorStack: true,
            // show internal stack trace for errors
            moduleTrace: true,
            // show module trace for errors
            // (why was causing module referenced)

            builtAt: true,
            // show timestamp in summary
            errorsCount: true,
            // show errors count in summary
            warningsCount: true,
            // show warnings count in summary
            timings: true,
            // show build timing in summary
            version: true,
            // show webpack version in summary
        }
    },
    {
        mode: 'production',
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                }
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
    }
];