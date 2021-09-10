const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production"
};

module.exports = {
    mode: mode,
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          }
    }
}