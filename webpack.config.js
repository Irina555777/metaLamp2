const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;


module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        open:true
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
  //new HtmlWebpackPlugin({
   // template: path.resolve(__dirname, 'src/pages/UI-colors-type', 'UIColorsType.html')
  
//}),
new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/pages', 'index.html')

}),

new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/pages/pages/UI-form-elements', 'UIFormElements.html'),
  filename: 'UiFormElements.html'
}),
new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/pages/pages/UI-cards', 'UiCards.html'),
  filename: 'UiCards.html'
}),
new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/pages/pages/UI-headers-footers', 'UiheadersFooters.html'),
  filename: 'UiheadersFooters.html'
}),
new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/pages/pages/UI-colors-type', 'UIColorsType.html'),
  filename: 'UiColorsType.html'
}),



    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    })
],
module: {
    rules: [

      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      
        {
            test: /\.html$/i,
            loader: 'html-loader',
        },
        {
            test: /\.(c|sa|sc)ss$/i,
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
                "css-loader",
                "sass-loader"
            ],
          },
          {
            test: /\.(woff,woff2,ttf)$/i,
            type: 'asset/resource',
            generator:{
                filename: 'fonts/[name][ext]'
    
            }
          },

          {
            test: /\.(jpe?g|png|webp|gif|svg)$/i,
            use: devMode
              ? []
              : [
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                      },
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.9],
                        speed: 4,
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      webp: {
                        quality: 75,
                      },
                    },
                  },
                ],
            type: 'asset/resource',
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          },
    ]
}
}