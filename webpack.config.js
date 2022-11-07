const path = require(`path`);
module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devtool: `source-map`, // Подключаем sourcemaps
  // devServer: {
  //   contentBase: path.join(__dirname, `public`),
  //   watchContentBase: true,
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
    ],
  },
};
