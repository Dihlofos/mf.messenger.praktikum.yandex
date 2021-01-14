const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "messenger.bundle.js",
    publicPath: "",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
        exclude: [path.resolve(__dirname, "node_modules")],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // Using file-loader for these files
            loader: "file-loader",

            // In options we can set different things like format
            // and directory to save
            options: {
              outputPath: "./assets/images",
            },
          },
        ],
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            // Using file-loader too
            loader: "file-loader",
            options: {
              outputPath: "./assets/fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "images/*",
          context: path.resolve(__dirname, "src", "assets"),
          to: "./assets",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
