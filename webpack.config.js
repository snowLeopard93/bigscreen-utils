const path = require('path');
const webpack = require('webpack');

module.exports = {
  // entry: path.join(__dirname, './index.js'),
  entry: {
    index: path.join(__dirname, './index.js'),
    numberUtil: path.join(__dirname, './src/util/numberUtil'),
    arrayutil: path.join(__dirname, './src/util/arrayUtil'),
    stringUtil: path.join(__dirname, './src/util/stringUtil'),
    objectUtil: path.join(__dirname, './src/util/objectUtil'),
    timeUtil: path.join(__dirname, './src/util/timeUtil'),
    financeUtil: path.join(__dirname, './src/util/financeUtil'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    // libraryTarget: 'commonjs2',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|ja/),
  ],
};
