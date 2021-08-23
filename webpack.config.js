const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { resolve } = require('path')

module.exports = {
  entry: {
    router: './router.js',
    app: ['./main.js','./src/Home.js','./src/Alarm.js','./src/Image.js','./src/Memo.js','./src/ClockRender.js'],
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    })
  ],

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: '[hash].[ext]',
              limit: 10000
            }
          }
        ]
      },
    ]
  }
}
