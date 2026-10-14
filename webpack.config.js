// webpack config
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const tsNameof = require("ts-nameof");


module.exports = (env = {}) => ([
{

  context: path.resolve(__dirname, 'demo'),
  mode: env.production ? 'production' : 'development',
  entry: {
    "app": './index.js',
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].min.js",
  },

  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: ['src/assets/**', 'node_modules/**']
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // required by resolve-url-loader
            }
          }
        ],
      },

      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          'resolve-url-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true, // required by resolve-url-loader
            }
          }
        ],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          productionMode: !!env.production,
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
              getCustomTransformers: () => ({ before: [tsNameof] })
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|woff|ttf|otf|woff2)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.runtime.esm-browser.prod'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',

    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: !env.production,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    })
  ],

  devtool: env.production ? false : 'source-map',
 
}]);
