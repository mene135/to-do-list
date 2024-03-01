const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply rule for .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader' // Use Babel for transpiling JavaScript files
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  }
};
